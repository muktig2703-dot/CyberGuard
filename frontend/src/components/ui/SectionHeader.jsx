export default function SectionHeader({
  title,
  subtitle,
  actions,
}) {
  return (
    <div className="mb-6 flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-bold">
          {title}
        </h2>

        <p
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {subtitle}
        </p>

      </div>

      {actions}

    </div>
  );
}