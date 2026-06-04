export default function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl text-left">
      <p className="text-sm font-black uppercase tracking-[0.35em] text-orange-400">
        {label}
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-4xl text-base leading-8 text-zinc-300">
          {description}
        </p>
      )}
    </div>
  );
}