import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Globe } from "lucide-react";
import { site } from "@/data/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "All Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const projectLinks = [
  { label: "Completed Projects", href: "/projects/completed" },
  { label: "Ongoing Projects", href: "/projects/ongoing" },
  { label: "Upcoming Projects", href: "/projects/upcoming" },
];

const headingClass =
  "mb-6 flex items-center gap-2 font-display text-base font-bold text-white";
const linkClass = "transition-colors duration-200 hover:text-gold-light";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-dark text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-forest-dark via-forest-dark/90 to-forest-dark/60"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative block h-16 w-16 overflow-hidden rounded-lg bg-white ring-1 ring-gold/40">
                <Image
                  src="/logo.jpg"
                  alt={`${site.name} logo`}
                  fill
                  sizes="64px"
                  className="scale-[1.12] object-contain"
                />
              </span>
              <span className="font-display text-sm font-bold leading-tight">
                MAHAVIRA DEVELOPERS
                <span className="block text-[10px] tracking-[0.35em] text-gold">
                  LLP
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-xs leading-relaxed text-gray-400">
              Plotted developments in and around Bhubaneswar, with clear
              pricing and honest guidance from first visit to final booking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={headingClass}>
              <span className="h-[2px] w-4 bg-gold" /> Quick Links
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4 className={headingClass}>
              <span className="h-[2px] w-4 bg-gold" /> Projects
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              {projectLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={headingClass}>
              <span className="h-[2px] w-4 bg-gold" /> Contact Us
            </h4>
            <ul className="space-y-4 text-xs text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>
                  {site.address.line1}, {site.address.line2},{" "}
                  {site.address.line3}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <span className="flex flex-col gap-1">
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="transition-colors hover:text-white"
                    >
                      +91 {p.display}
                    </a>
                  ))}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="shrink-0 text-gold" />
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {site.web}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] text-gray-400 md:flex-row">
          <p>© 2026 {site.name}. All Rights Reserved.</p>
          <p>Building trust, one plot at a time. Photos via Unsplash.</p>
        </div>
      </div>
    </footer>
  );
}
