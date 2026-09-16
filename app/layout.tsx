import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-custom" });

export const metadata: Metadata = {
  title: "Açaí Raiz | Sabor de verdade",
  description: "Açaí cremoso, combinações marcantes e uma experiência feita para dar vontade de repetir.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
