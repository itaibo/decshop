import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { baseUrl } from "@/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decshop - Decenas de artículos de la mejor calidad",
  description: "Compra artículos de la mejor calidad",
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
