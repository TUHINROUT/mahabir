import Link from "next/link";
import { ArrowRight, Hourglass } from "lucide-react";

export default function EmptyState({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-gold/50 bg-white px-6 py-16 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#E2CE9F] bg-[#F5EAD4] text-gold-deep">
        <Hourglass size={26} strokeWidth={1.6} />
      </span>
      <h3 className="mt-6 font-display text-2xl font-bold text-[#1C1917]">
        {title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-[#57534E]">
        {text}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/projects/ongoing"
          className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition hover:bg-gold-light"
        >
          View Ongoing Projects <ArrowRight size={15} />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-[#E6DFD5] px-6 py-3 text-sm font-semibold text-[#1C1917] transition hover:border-gold hover:text-gold-deep"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
