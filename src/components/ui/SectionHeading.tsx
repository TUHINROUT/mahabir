export default function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-[2px] w-6 bg-gold" />
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
      </div>
      <h2
        className={`font-display text-3xl font-bold leading-[1.2] md:text-4xl ${
          dark ? "text-white" : "text-[#1C1917]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm leading-relaxed ${
            dark ? "text-white/60" : "text-[#57534E]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
