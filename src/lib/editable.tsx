import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/**
 * Lightweight in-browser editing.
 *
 * NOTE (important + honest): this persists edits to *this browser only*
 * (localStorage). It is great for tweaking wording and previewing, and for
 * exporting a JSON of your changes to hand off. It does NOT change what other
 * visitors see. For edits everyone sees, either commit the change to the repo
 * (send me the exported JSON) or connect this project to Lovable + Supabase,
 * which adds real multi-user editing.
 *
 * Turn it on: add ?edit to the URL (e.g. .../wallerama/?edit) and enter the pass.
 */
const PASSWORD = "wallerama2026";
const STORE_KEY = "wallerama-overrides";

type Overrides = Record<string, string>;

type Ctx = {
  editing: boolean;
  overrides: Overrides;
  setOverride: (id: string, value: string) => void;
  enable: () => void;
  disable: () => void;
  exportJSON: () => void;
  reset: () => void;
};

const EditCtx = createContext<Ctx | null>(null);

function loadOverrides(): Overrides {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
  } catch {
    return {};
  }
}

export function EditProvider({ children }: { children: React.ReactNode }) {
  const [editing, setEditing] = useState(false);
  const [overrides, setOverrides] = useState<Overrides>(() => loadOverrides());

  useEffect(() => {
    if (new URLSearchParams(location.search).has("edit")) {
      const pass = window.prompt("Admin password to edit text:");
      if (pass === PASSWORD) setEditing(true);
      else if (pass !== null) window.alert("Wrong password — viewing only.");
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-editing", String(editing));
  }, [editing]);

  const setOverride = useCallback((id: string, value: string) => {
    setOverrides((prev) => {
      const next = { ...prev, [id]: value };
      localStorage.setItem(STORE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const exportJSON = useCallback(() => {
    const blob = new Blob([JSON.stringify(overrides, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wallerama-text-changes.json";
    a.click();
    URL.revokeObjectURL(url);
  }, [overrides]);

  const reset = useCallback(() => {
    localStorage.removeItem(STORE_KEY);
    setOverrides({});
    location.reload();
  }, []);

  const value = useMemo(
    () => ({
      editing,
      overrides,
      setOverride,
      enable: () => setEditing(true),
      disable: () => setEditing(false),
      exportJSON,
      reset,
    }),
    [editing, overrides, setOverride, exportJSON, reset]
  );

  return <EditCtx.Provider value={value}>{children}</EditCtx.Provider>;
}

export function useEdit() {
  const ctx = useContext(EditCtx);
  if (!ctx) throw new Error("useEdit must be used within EditProvider");
  return ctx;
}

/** An inline, optionally-editable piece of text. `id` must be stable + unique. */
export function Editable({
  id,
  children,
  as: Tag = "span",
  className,
}: {
  id: string;
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}) {
  const { editing, overrides, setOverride } = useEdit();
  const text = overrides[id] ?? children;
  return (
    <Tag
      className={["editable", className].filter(Boolean).join(" ")}
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={(e: React.FocusEvent<HTMLElement>) => {
        const val = e.currentTarget.innerText;
        if (val !== text) setOverride(id, val);
      }}
    >
      {text}
    </Tag>
  );
}

export function AdminBar() {
  const { editing, exportJSON, reset, disable } = useEdit();
  if (!editing) return null;
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 flex flex-wrap items-center justify-center gap-3 bg-forest-3/95 border-t-2 border-gold px-4 py-3 text-cream text-sm">
      <span className="font-title tracking-wide">🔒 Admin edit mode — changes save to this browser</span>
      <button onClick={exportJSON} className="rounded-full bg-gold px-4 py-1 font-title text-forest-3">
        Download changes (JSON)
      </button>
      <button onClick={reset} className="rounded-full border border-cream/50 px-4 py-1">
        Reset
      </button>
      <button onClick={disable} className="rounded-full border border-cream/50 px-4 py-1">
        Done
      </button>
    </div>
  );
}
