import { CalendarCheck, FileSignature, MapPin, PhoneCall } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: PhoneCall,
    title: "Enquire",
    desc: "Call or message us to learn about current projects and rates.",
  },
  {
    icon: MapPin,
    title: "Visit the Site",
    desc: "See the land and the surroundings with our team before you decide.",
  },
  {
    icon: CalendarCheck,
    title: "Choose Your Plot",
    desc: "Pick the plot that fits your size, budget and plans.",
  },
  {
    icon: FileSignature,
    title: "Book & Register",
    desc: "We guide you through booking and the documentation steps.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title={
            <>
              Four Simple Steps to{" "}
              <span className="text-gold">Your Plot</span>
            </>
          }
        />
        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent lg:block"
          />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative text-center">
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-white text-gold shadow-md">
                <Icon size={26} strokeWidth={1.4} />
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-forest text-[11px] font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-[#1C1917]">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-[230px] text-xs leading-relaxed text-[#57534E]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
