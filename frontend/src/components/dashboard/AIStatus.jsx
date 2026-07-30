import GlassCard from "../ui/GlassCard";

export default function AIStatus() {
  return (
    <GlassCard className="h-[350px]">

      <h2 className="mb-8 text-xl font-semibold">
        AI Engine Status
      </h2>

      <div className="space-y-6">

        <div>

          <p className="text-slate-400">
            Detection Model
          </p>

          <h3 className="text-lg font-semibold">
            Random Forest
          </h3>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Confidence</span>

            <span>99.2%</span>

          </div>

          <div className="h-3 rounded-full bg-slate-700">

            <div
              className="h-3 rounded-full bg-blue-500"
              style={{ width: "99%" }}
            />

          </div>

        </div>

        <div className="flex justify-between">

          <span>Inference Time</span>

          <span>11 ms</span>

        </div>

        <div className="flex justify-between">

          <span>Auto Response</span>

          <span className="text-green-400">
            Enabled
          </span>

        </div>

        <div className="flex justify-between">

          <span>Threat Level</span>

          <span className="text-orange-400">
            Medium
          </span>

        </div>

      </div>

    </GlassCard>
  );
}