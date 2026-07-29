import GlassCard from "../ui/GlassCard";

export default function DataTable({
  columns = [],
  children,
}) {
  return (
    <GlassCard>

      <table className="w-full">

        <thead>

          <tr>

            {columns.map((column) => (
              <th
                key={column}
                className="border-b pb-4 text-left"
              >
                {column}
              </th>
            ))}

          </tr>

        </thead>

        <tbody>

          {children}

        </tbody>

      </table>

    </GlassCard>
  );
}