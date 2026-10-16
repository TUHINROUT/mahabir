"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { site } from "@/data/site";

const projectLinks = [
  { label: "Completed Projects", href: "/projects/completed" },
  { label: "Ongoing Projects", href: "/projects/ongoing" },
  { label: "Upcoming Projects", href: "/projects/upcoming" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (active: boolean) =>
    `flex items-center gap-1 text-sm font-medium transition-colors ${
      active ? "text-gold" : "text-white/90 hover:text-gold"
    }`;

  const solid = scrolled || open;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-white/10 bg-forest-dark/95 shadow-lg shadow-black/20 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex max-w-[1440px] items-center justify-between px-6 transition-all duration-300 md:px-12 ${
          solid ? "py-3" : "py-5"
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
          aria-label={`${site.name} home`}
        >
          <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gold/40">
            <Image
              src="/logo.jpg"
              alt={`${site.name} logo`}
              fill
              sizes="56px"
              className="scale-[1.12] object-contain"
            />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-base font-bold tracking-wide text-white">
              MAHAVIRA DEVELOPERS
            </span>
            <span className="text-[10px] font-semibold tracking-[0.35em] text-gold">
              LLP
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          <li>
            <Link href="/" className={linkClass(isActive("/"))}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={linkClass(isActive("/about"))}>
              About Us
            </Link>
          </li>
          <li className="group relative">
            <Link
              href="/projects"
              className={linkClass(isActive("/projects"))}
              aria-haspopup="true"
            >
              Projects
              <ChevronDown
                size={14}
                className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-5 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="overflow-hidden rounded-lg border border-white/10 bg-forest-dark/95 py-2 shadow-2xl backdrop-blur">
                {projectLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`block px-5 py-3 text-sm transition-colors hover:bg-white/5 hover:text-gold ${
                        pathname === l.href ? "text-gold" : "text-white/85"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link href="/contact" className={linkClass(isActive("/contact"))}>
              Contact Us
            </Link>
          </li>
        </ul>

        <a
          href={`tel:${site.phones[0].tel}`}
          className="hidden items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-forest-dark transition hover:bg-gold-light lg:flex"
        >
          <Phone size={15} aria-hidden /> Call {site.phones[0].display}
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-6 pb-6 pt-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-sm font-medium ${isActive("/") ? "text-gold" : "text-white/90"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-sm font-medium ${isActive("/about") ? "text-gold" : "text-white/90"}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-sm font-medium ${pathname === "/projects" ? "text-gold" : "text-white/90"}`}
              >
                Projects
              </Link>
              <ul className="ml-3 border-l border-gold/30 pl-4">
                {projectLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`block py-2 text-sm ${pathname === l.href ? "text-gold" : "text-white/70"}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className={`block py-2.5 text-sm font-medium ${isActive("/contact") ? "text-gold" : "text-white/90"}`}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href={`tel:${site.phones[0].tel}`}
                className="mt-3 inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-forest-dark"
              >
                <Phone size={15} aria-hidden /> Call {site.phones[0].display}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
