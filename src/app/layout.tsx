import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mahavira Developers LLP | Plots for Sale in Bhubaneswar",
    template: "%s | Mahavira Developers LLP",
  },
  description:
    "Mahavira Developers LLP offers plots for sale in Bhubaneswar, including Bajarangi Nagar at Kuainlo and Maruti Nagar near Bhubaneswar New Railway Station.",
  icons: { icon: "/logo.jpg" },
  openGraph: {
    title: "Mahavira Developers LLP",
    description: "Plots for sale in Bhubaneswar with clear pricing.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
