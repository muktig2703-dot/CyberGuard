import Card from "../ui/Card";

export default function StatsCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <Card className="min-h-[170px]">
      <div className="flex justify-between">
        <div>
          <p
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {title}
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            {value}
          </h2>

          <p
            className="mt-5"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div>{icon}</div>
      </div>
    </Card>
  );
}