import type { Metadata } from "next";
import { Fira_Code, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import Contacts from "./_components/Contacts";
import Footer from "./_components/Footer";
import SocialSidebar from "./_components/SocialSidebar";
import Navbar from "./_components/Navbar";
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--pixelify-sans",
});
export const metadata: Metadata = {
  title: "Souad Alsayed | Frontend Developer",
  description:
    "Portfolio of Souad Alsayed, a software engineer & frontend developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${firaCode.className} ${pixelifySans.variable} antialiased`}
      >
        <div className="min-h-screen bg-background">
          <Navbar />
          <SocialSidebar />
          <main className="mx-auto w-full"> {children}</main>
          <Contacts />
          <Footer />
        </div>
      </body>
    </html>
  );
}
