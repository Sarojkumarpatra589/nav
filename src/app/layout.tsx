import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030A0D",
};

export const metadata: Metadata = {
  title: "NAVCHETNAA AI — Architecting Sovereign AI & Production Infrastructure",
  description:
    "We engineer custom artificial intelligence systems, agentic workflow pipelines, and resilient digital architectures built for high-throughput commercial scale.",
  keywords: [
    "NAVCHETNAA AI",
    "Artificial Intelligence",
    "Business Automation",
    "Custom Software Development",
    "Website Development",
    "Mobile App Development",
    "Digital Agency",
    "Production Infrastructure",
  ],
  authors: [{ name: "NAVCHETNAA AI" }],
  icons: {
    icon: "/navchetnaa-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth bg-[#030A0D]">
      <body className="min-h-screen bg-[#030A0D] text-[#F4FBF8] antialiased selection:bg-[#8CEE3F] selection:text-[#030A0D] relative">
        {children}
      </body>
    </html>
  );
}
