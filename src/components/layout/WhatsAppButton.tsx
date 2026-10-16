import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink(
        "Hello Mahavira Developers, I would like to know more about your plots.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-black/30 transition hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}
