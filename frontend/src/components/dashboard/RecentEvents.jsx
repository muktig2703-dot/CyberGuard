import GlassCard from "../ui/GlassCard";
import { securityEvents } from "../../data/dashboardData";

export default function RecentEvents() {
  return (
    <GlassCard className="h-[350px]">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Security Events
      </h2>

      <div className="space-y-5">

        {securityEvents.map((event, index) => (

          <div
            key={index}
            className="flex items-center gap-4"
          >

            <div className="h-3 w-3 rounded-full bg-green-500" />

            <div>

              <p className="font-medium">
                {event}
              </p>

              <small className="text-slate-400">
                Just now
              </small>

            </div>

          </div>

        ))}

      </div>
    </GlassCard>
  );
}