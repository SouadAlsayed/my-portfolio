import type { Metadata } from "next";
import { Fira_Code, Pixelify_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${firaCode.className} ${pixelifySans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
