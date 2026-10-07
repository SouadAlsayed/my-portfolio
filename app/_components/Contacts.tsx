import { HugeiconsIcon } from "@hugeicons/react";
import SectionHeader from "./SectionHeader";
import { Mail01Icon } from "@hugeicons/core-free-icons";

function Contacts() {
  return (
    <section
      id="contacts"
      className="px-10 py-16 md:px-30 md:py-20 text-secondary  relative
         bg-[linear-gradient(-120deg,rgba(199,120,221,0.10)_0%,rgba(199,120,221,0.06)_30%,rgba(40,44,51,0.025)_60%,transparent_100%)] border-y border-primary"
    >
      <div className="flex max-w-2/3 flex-col justify-between gap-10">
        <p className="text-primary font-pixel text-lg">{"// "}say hello</p>

        <h1 className="tracking-wider text-4xl sm:text-6xl md:text-8xl font-bold text-white">
          Let&apos;s work together.
        </h1>

        <p className="text-secondary">
          I&apos;m open to new opportunities and collaborations. If you have an
          idea you&apos;d like to discuss or any questions, don&apos;t hesitate
          to reach out
        </p>

        <div className="flex items-center gap-2 w-fit wrap-anywhere px-5 py-2 text-white border border-primary bg-background hover:bg-[rgba(199,120,221,0.16)] transition-colors">
          <a className="" href="mailto:souadalsayed.dev@gmail.com">
            souadalsayed.dev
          </a>
          <HugeiconsIcon
            size={18}
            icon={Mail01Icon}
            className="transition-colors hover:text-white"
          />
        </div>
      </div>
    </section>
  );
}

export default Contacts;
