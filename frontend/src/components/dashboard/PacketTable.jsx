import GlassCard from "../ui/GlassCard";
import { packetLogs } from "../../data/dashboardData";

export default function PacketTable() {
  return (
    <GlassCard className="h-[420px]">
      <h2 className="mb-6 text-xl font-semibold">
        Live Packet Stream
      </h2>

      <table className="w-full text-left">

        <thead>

          <tr className="border-b border-slate-700">

            <th className="pb-3">Time</th>

            <th className="pb-3">Source IP</th>

            <th className="pb-3">Protocol</th>

            <th className="pb-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {packetLogs.map((packet, index) => (

            <tr
              key={index}
              className="border-b border-slate-800"
            >

              <td className="py-4">{packet.time}</td>

              <td>{packet.ip}</td>

              <td>{packet.protocol}</td>

              <td>

                <span
                  className={`font-medium ${
                    packet.status === "Normal"
                      ? "text-green-400"
                      : packet.status === "Port Scan"
                      ? "text-orange-400"
                      : "text-red-400"
                  }`}
                >
                  {packet.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </GlassCard>
  );
}