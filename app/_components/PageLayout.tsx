import type { ReactNode } from "react";
import Navbar from "./Navbar";
import SocialSidebar from "./SocialSidebar";
import Contacts from "./Contacts";
import Footer from "./Footer";

/**
 * Same shell as the home page: Navbar + SocialSidebar + main + Footer.
 * If your app/page.tsx wrapper div has extra classes (background, text color...),
 * copy them onto the div below so the pages match exactly.
 */
function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <SocialSidebar />

      <main className="mx-auto w-full">
        {children}
        <Contacts />
      </main>

      <Footer />
    </div>
  );
}

export default PageLayout;
