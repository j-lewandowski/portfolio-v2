import type { Metadata } from "next";
import Image from "next/image";
import "../globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Jakub Lewandowski - Portfolio",
  description: "Portfolio website",
};

// const font = Roboto({
//   weight: ["100", "400", "500", "700", "300"],
//   subsets: ["latin"],
//   variable: "--font-SFPro",
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans bg-primary relative overflow-y-visible`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
