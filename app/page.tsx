import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import SocialSidebar from "./_components/SocialSidebar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SocialSidebar />
      <main className="mx-auto w-full max-w-6xl px-6">
        <Hero />
      </main>
    </div>
  );
}
