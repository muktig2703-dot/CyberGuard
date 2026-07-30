import { ShieldCheck, Clock3 } from "lucide-react";

export default function SectionHeader() {
  return (
    <div className="mb-8 flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-bold tracking-tight">
          Good Afternoon, Mukti 👋
        </h1>

        <p
          className="mt-3 text-lg"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          AI-powered Security Operations Center
        </p>

      </div>

      <div className="flex gap-4">

        <div
          className="rounded-2xl border px-5 py-4"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        >
          <div className="flex items-center gap-2">

            <ShieldCheck
              size={18}
              color="#22c55e"
            />

            <span>System Healthy</span>

          </div>

        </div>

        <div
          className="rounded-2xl border px-5 py-4"
          style={{
            borderColor: "var(--border)",
            background: "var(--surface)",
          }}
        >
          <div className="flex items-center gap-2">

            <Clock3 size={18} />

            <span>Last Sync 2 sec</span>

          </div>

        </div>

      </div>

    </div>
  );
}