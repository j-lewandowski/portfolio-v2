import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Jakub Lewandowski - Portfolio",
  description: "Portfolio website",
};

const SFPro = localFont({
  src: [
    { path: "../../public/fonts/SF-Pro-Text-Thin.otf", weight: "100" },
    { path: "../../public/fonts/SF-Pro-Text-Regular.otf", weight: "400" },
    { path: "../../public/fonts/SF-Pro-Text-Medium.otf", weight: "500" },
    { path: "../../public/fonts/SF-Pro-Text-Bold.otf", weight: "700" },
    { path: "../../public/fonts/SF-Pro.ttf", weight: "300" },
  ],
  variable: "--font-SFPro",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SFPro.variable} font-sans bg-primary relative `}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
