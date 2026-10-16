"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { projects } from "@/data/projects";
import { whatsappLink } from "@/data/site";

const fieldClass =
  "w-full rounded-lg border border-[#E6DFD5] bg-white px-4 py-3 text-sm text-[#1C1917] outline-none transition placeholder:text-[#A8A29E] focus:border-gold focus:ring-2 focus:ring-gold/20";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const interest = String(data.get("interest") ?? "General enquiry");
    const message = String(data.get("message") ?? "").trim();

    const text = [
      "Hello Mahavira Developers,",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Interested in: ${interest}`,
      message ? `Message: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold text-[#44403C]">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Enter your full name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-semibold text-[#44403C]">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            pattern="[0-9+\s\-]{10,15}"
            title="Enter a valid phone number"
            placeholder="10-digit mobile number"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="mb-2 block text-xs font-semibold text-[#44403C]">
          I am interested in
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue="General enquiry"
          className={fieldClass}
        >
          <option>General enquiry</option>
          {projects.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name} ({p.status})
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold text-[#44403C]">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you are looking for"
          className={fieldClass}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-forest-dark shadow-md transition hover:bg-gold-light"
      >
        <Send size={16} aria-hidden /> Send via WhatsApp
      </button>

      {sent && (
        <p role="status" className="text-xs text-gold-deep">
          WhatsApp opened with your details. Just press send and we will get
          back to you shortly.
        </p>
      )}
    </form>
  );
}
