import { skills } from "../_lib/data";
import SectionHeader from "./SectionHeader";

const grouped = Object.entries(
  skills.reduce<Record<string, string[]>>((acc, { name, category }) => {
    (acc[category] ||= []).push(name);
    return acc;
  }, {}),
);

function Skills() {
  return (
    <section
      id="skills"
      className="px-10 py-16 md:px-30 md:py-20 text-secondary relative
    after:pointer-events-none
    after:absolute
    after:top-[100px]
    after:right-0
    after:h-[60px]
    after:w-[50px]
    after:border
    after:border-primary
    after:border-r-0
    after:opacity-70
    after:content-['']

    before:pointer-events-none
    before:absolute
    before:top-[150px]
    before:right-0
    before:h-[50px]
    before:w-[30px]
    before:border
    before:border-primary
    before:border-r-0
    before:opacity-70
    before:content-['']
    "
    >
      {/* Header */}
      <div className="flex  items-center mb-16 md:mb-20">
        <SectionHeader title="skills" widthClass="w-1/3" />
      </div>

      {/* skills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {grouped.map(([category, names]) => (
          <div key={category} className="flex flex-col border border-secondary">
            <h3 className="p-3 text-lg text-white border-b border-secondary">
              {category}
            </h3>

            <ul className="flex flex-wrap gap-2 p-3">
              {names.map((name) => (
                <li
                  key={name}
                  className="px-3 py-1 text-sm border border-secondary hover:text-white hover:border-primary transition-colors"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
