import {
  ArrowRight,
  FileCheck2,
  MapPinned,
  Route,
  Tag,
  Users,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const offerings = [
  { icon: MapPinned, title: "Well-Located\nPlots" },
  { icon: Tag, title: "Transparent\nPricing" },
  { icon: Route, title: "Site Visit\nAssistance" },
  { icon: FileCheck2, title: "Documentation\nGuidance" },
  { icon: Users, title: "Dedicated\nSupport" },
];

export default function Offerings() {
  return (
    <section className="bg-[#FAF7F2] py-20 text-[#121820]">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xs shrink-0">
            <SectionHeading
              eyebrow="WHAT WE OFFER"
              title={
                <>
                  Everything You Need to{" "}
                  <span className="text-gold">Buy with Confidence</span>
                </>
              }
              description="From the first enquiry to the final booking, we keep the process simple and open."
            />
          </div>

          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {offerings.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="group flex min-h-[240px] flex-col justify-between rounded-xl border border-[#E6DFD5] bg-[#FAF7F2]/60 p-6 transition-all duration-300 hover:border-gold/50 hover:bg-white hover:shadow-lg"
              >
                <Icon className="mt-2 text-gold" size={42} strokeWidth={1.2} />
                <div className="space-y-6">
                  <p className="whitespace-pre-line text-sm font-bold leading-snug">
                    {title}
                  </p>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
