export default function Input({
  label,
  ...props
}) {
  return (
    <div className="space-y-2">

      {label && (
        <label
          className="text-sm"
          style={{
            color: "var(--text-secondary)",
          }}
        >
          {label}
        </label>
      )}

      <input
        {...props}
        className="
        w-full
        rounded-xl
        border
        bg-transparent
        px-4
        py-3
        outline-none
        transition
        focus:border-blue-500
        "
        style={{
          borderColor: "var(--border)",
        }}
      />

    </div>
  );
}