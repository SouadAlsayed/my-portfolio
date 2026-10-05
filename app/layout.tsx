import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Souad Alsayed | Frontend Developer",
  description: "Souad Alsayed | Frontend Developer & Software Engineer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${firaCode.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
