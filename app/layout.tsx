import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Souad Alsayed | Frontend Developer",
  description:
    "Portfolio of Souad Alsayed, a software engineer & frontend developer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} antialiased`}>{children}</body>
    </html>
  );
}
