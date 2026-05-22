export default function SectionHeader({
  label,
  title,
  description,
  dark = true,
  align = "left",
}: {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "mx-auto text-center md:mx-0 md:text-left";
  return (
    <div className={`max-w-4xl ${alignment}`}>
      <p className={`text-sm font-black uppercase tracking-[0.3em] sm:text-base md:text-xl ${dark ? "text-orange-400" : "text-black/70"}`}>{label}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className={`mt-4 max-w-4xl text-base leading-7 sm:text-lg sm:leading-7 ${dark ? "text-zinc-300" : "text-black/85"}`}>{description}</p>}
    </div>
  );
}
