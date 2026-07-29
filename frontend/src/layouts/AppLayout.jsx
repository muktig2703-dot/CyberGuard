import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import AnimatedBackground from "../components/background/AnimatedBackground";

export default function AppLayout({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--text)]">

      {/* Background */}
      <AnimatedBackground />

      {/* Main Layout */}
      <div className="relative z-10 flex min-h-screen">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Section */}
        <div className="flex flex-1 flex-col">

          {/* Top Navbar */}
          <Navbar />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-8 lg:p-10">
            <div className="mx-auto w-full max-w-[1700px]">
              {children}
            </div>
          </main>

        </div>

      </div>
    </div>
  );
}