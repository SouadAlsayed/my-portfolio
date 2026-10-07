import Link from "next/link";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

function About() {
  return (
    <section
      id="about-me"
      className="min-h-screen px-10 py-16 md:px-30 md:py-20 text-secondary 
    "
    >
      {/* Header */}
      <div className="flex  items-center mb-16 md:mb-20">
        <SectionHeader title="about-me" widthClass="w-2/3" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl text-white">
            Hello, I&apos;m Souad Alsayed!
          </h3>

          <p className="leading-relaxed">
            I&apos;m a front-end developer who loves turning ideas into clean,
            responsive, and user-friendly interfaces. I build with React and
            Next.js, and I enjoy working on everything from small interactive
            apps to full booking and dashboard experiences.
          </p>

          <p className="leading-relaxed">
            My projects include a hotel booking website and admin dashboard, a
            travel tracker with an interactive map, a movie search app, and a
            pizza ordering app. I&apos;ve also worked in a team on CareerK,
            which taught me a lot about collaboration and clean, maintainable
            code.
          </p>

          <p className="leading-relaxed">
            Alongside web development, I have a solid foundation in C++, SQL,
            and core programming concepts, and I&apos;m always learning
            something new.
          </p>

          <Link
            href="/about-me"
            className="w-fit px-5 py-2 border border-primary bg-background hover:bg-[rgba(199,120,221,0.16)] transition-colors text-white"
          >
            Read more
          </Link>
        </div>

        <div
          className="relative min-h-[300px] md:min-h-[420px] relative
    after:pointer-events-none
    after:absolute
    after:-top-10
    after:-right-10
    after:h-[100px]
    after:w-[150px]
    after:border
    after:border-primary
    after:opacity-70
    after:content-['']

    before:pointer-events-none
    before:absolute
    before:top-0
    before:right-10
    before:h-[90px]
    before:w-[120px]
    before:border
    before:border-primary
    before:opacity-70
    before:content-['']"
        >
          {/* Dots */}
          <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,rgba(171,178,191,0.75)_1px,transparent_1px)] bg-[length:12px_12px]" />

          <Image
            src="/about1.png"
            alt="Souad Alsayed"
            fill
            quality={100}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="border-b border-primary relative z-10 object-contain object-bottom md:scale-110 md:origin-bottom "
          />
        </div>
      </div>
    </section>
  );
}

export default About;
