"use client";

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const importantLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
];

const ongoingProjects = [
  { label: "Bajarangi Nagar", href: "/projects/ongoing" },
  { label: "Completed Projects", href: "/projects/completed" },
  { label: "Upcoming Projects", href: "/projects/upcoming" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Linkedin", href: "#" },
  { label: "Youtube", href: "#" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-forest-dark text-white border-t border-white/10">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Brand & Tagline (Col 1 - span 3) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <Link href="/" className="inline-block group mb-3">
              <div className="relative h-16 w-52 overflow-hidden">
                <Image
                  src="/Green House MD Developers Logo.png"
                  alt={`${site.name} logo`}
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="font-display text-xs tracking-widest text-gold uppercase font-semibold mt-1">
              The Tradition of Trust
            </p>
          </div>

          {/* Important Links (Col 2 - span 3) */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 font-display text-xs font-bold tracking-widest uppercase text-white pb-2 border-b border-white/10">
              Important Links
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              {importantLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="group flex items-center gap-2 transition-colors hover:text-gold">
                    <span className="text-gold font-bold">›</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ongoing Projects (Col 3 - span 3) */}
          <div className="lg:col-span-3">
            <h4 className="mb-6 font-display text-xs font-bold tracking-widest uppercase text-white pb-2 border-b border-white/10">
              Ongoing Projects
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              {ongoingProjects.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="group flex items-center gap-2 transition-colors hover:text-gold">
                    <span className="text-gold font-bold">›</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Out To Us (Col 4 - span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="mb-6 font-display text-xs font-bold tracking-widest uppercase text-white pb-2 border-b border-white/10">
              Reach Out To Us
            </h4>
            
            <div>
              <p className="font-display text-[11px] font-bold tracking-wider text-gold uppercase mb-1">
                Experience Centre
              </p>
              <p className="text-xs leading-relaxed text-gray-300">
                {site.address.line1}, {site.address.line2}, {site.address.line3}
              </p>
            </div>

            <div className="pt-1">
              <p className="text-xs text-gray-300 space-x-1">
                {site.phones.map((p, idx) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-gold transition-colors">
                    +91 {p.display}{idx < site.phones.length - 1 ? ", " : ""}
                  </a>
                ))}
              </p>
            </div>

            <div className="pt-2">
              <p className="font-display text-[11px] font-bold tracking-wider text-gold uppercase mb-1">
                Head Office
              </p>
              <p className="text-xs text-gray-300">
                Rudrapur, Bhubaneswar – 751010
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-[11px] text-gray-400 md:flex-row">
          <p>© 2026 {site.name}. All Rights Reserved.</p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-gold transition-colors">
                {s.label}
              </a>
            ))}
          </div>

          {/* Legal Links & Back to Top */}
          <div className="flex items-center gap-6">
            <Link href="/terms" className="hover:text-gold transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="hover:text-gold transition-colors uppercase tracking-widest text-[10px] font-semibold pl-4 border-l border-white/20 cursor-pointer"
            >
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}