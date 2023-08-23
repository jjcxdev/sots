import "./globals.css";
import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Footer from "./components/footer";
import Call from "./components/cta";
import Navbar from "./components/navbar";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seminar On The Seas",
  description: "by jjcx",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Call />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
