import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Lora,
} from "next/font/google";

import "./globals.css";
import { Background } from "@/components/background/Background";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const body = Lora({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Para Siempre, Ana Lucía",
  description: "Un legado construido con amor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`
          ${display.variable}
          ${body.variable}
          antialiased
        `}
      >
        <Background />
        {children}
      </body>
    </html>
  );
}