import { Bell, Search, Settings } from "lucide-react";
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header
      className="sticky top-0 z-20 flex h-20 items-center justify-between border-b px-8 backdrop-blur-xl"
      style={{
        background: "rgba(10,15,28,0.70)",
        borderColor: "var(--border)",
      }}
    >
      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
          }}
        >
          Monitor your AI Security Operations Center
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div
          className="flex items-center gap-3 rounded-xl border px-4 py-3"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        >
          <Search size={18} />

          <input
            className="w-64 bg-transparent outline-none"
            placeholder="Search threats..."
          />
        </div>

        <button className="rounded-xl p-3 hover:bg-white/5">
          <Bell size={20} />
        </button>

        <button className="rounded-xl p-3 hover:bg-white/5">
          <Settings size={20} />
        </button>

        <ThemeToggle />

      </div>
    </header>
  );
}