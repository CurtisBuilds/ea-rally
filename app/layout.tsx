import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EA Rally",
  description: "Elevation Athletics — Pickleball Coach Curriculum",
  manifest: "/manifest.json",
  themeColor: "#004356",
  icons: { icon: "/pickleball.jpeg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
