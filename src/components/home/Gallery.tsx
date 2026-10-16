import Photo from "@/components/ui/Photo";
import SectionHeading from "@/components/ui/SectionHeading";
import { photos } from "@/data/photos";

const items = [
  { src: photos.villa, alt: "Modern villa with pool", label: "Dream Homes", span: "md:col-span-2 md:row-span-2" },
  { src: photos.fields, alt: "Aerial view of green plots", label: "Green Plots", span: "" },
  { src: photos.cityAerial, alt: "Aerial view of a growing city", label: "Growing Cities", span: "" },
  { src: photos.houseDusk, alt: "Illuminated house at dusk", label: "Evening Living", span: "" },
  { src: photos.hillside, alt: "Hillside with roads and homes", label: "Connected Localities", span: "" },
];

export default function Gallery() {
  return (
    <section className="bg-[#FAF7F2] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionHeading
          eyebrow="LIFE ON YOUR LAND"
          title={
            <>
              Imagine Your <span className="text-gold">Future Home</span>
            </>
          }
          description="Own a plot, design the home you have always wanted and grow with the city."
        />
        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it) => (
            <figure
              key={it.label}
              className={`group relative overflow-hidden rounded-2xl ${it.span}`}
            >
              <Photo
                src={it.src}
                alt={it.alt}
                sizes="(max-width: 768px) 50vw, 25vw"
                className="transition duration-700 group-hover:scale-110"
                fallback={<div className="h-full w-full bg-gradient-to-br from-forest to-forest-light" />}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-4 left-4 font-display text-lg font-semibold text-white">
                {it.label}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-4 text-[11px] text-[#78716C]">
          Images are representative. Photos via Unsplash.
        </p>
      </div>
    </section>
  );
}
