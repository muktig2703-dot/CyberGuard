export default function Button({
  children,
  variant = "primary",
  ...props
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-[var(--border)] hover:bg-white/5",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      className={`
      rounded-xl
      px-5
      py-3
      font-medium
      transition-all
      duration-200
      ${variants[variant]}
      `}
      {...props}
    >
      {children}
    </button>
  );
}