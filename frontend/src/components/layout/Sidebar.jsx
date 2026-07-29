import {
  LayoutDashboard,
  Radar,
  Shield,
  BarChart3,
  FileText,
  Settings,
  UserCircle,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Monitoring", icon: Radar },
  { name: "Detection", icon: Shield },
  { name: "Analytics", icon: BarChart3 },
  { name: "Reports", icon: FileText },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside
      className="flex w-72 flex-col justify-between border-r"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
    >
      <div>

        <div className="border-b px-8 py-8" style={{ borderColor: "var(--border)" }}>
          <h1 className="text-3xl font-bold">CyberGuard</h1>

          <p
            className="mt-2 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            AI Security Operations Center
          </p>
        </div>

        <nav className="space-y-2 p-5">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition-all duration-200 hover:bg-white/5"
            >
              <item.icon size={20} />

              <span>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <div
        className="m-5 rounded-2xl border p-4"
        style={{
          borderColor: "var(--border)",
        }}
      >
        <div className="flex items-center gap-3">

          <UserCircle size={40} />

          <div>
            <p className="font-semibold">Mukti</p>

            <p
              className="text-sm"
              style={{
                color: "var(--text-secondary)",
              }}
            >
              Administrator
            </p>
          </div>

        </div>
      </div>
    </aside>
  );
}