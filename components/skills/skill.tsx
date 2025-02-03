import { useState, useEffect } from 'react';
import { useSectionSwitcher } from '@/hooks/useSectionSwitcher';

interface Section {
  title: string;
  text: string;
}

export const SkillSection: React.FC<{ skills: Section[] }> = ({ skills }) => {
  const { setSection, counter, section, isChanging, setAnimationState
 } = useSectionSwitcher(skills);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 gap-8">
      <div className="flex flex-col gap-8 my-8 w-full lg:w-auto">
        {skills.map((skill, i) => (
          <div key={i}>
            <p
              onClick={() => {setSection(i);setAnimationState(false)}}
              className={
                "text-2xl md:text-4xl font-black cursor-pointer " +
                (section === i ? "text-white" : "text-[#777777]")
              }
            >
              {skill.title}
            </p>

            {/* Show the active section's text under its title on mobile */}
            <div className={"lg:hidden " + (section === i ? "block" : "hidden")}>
              <p className="text-xl mt-4">{skill.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Show the active section's text on the side for larger screens */}
      <div className="hidden lg:flex flex-col justify-between w-[100%] py-8">
        <p
          className={`text-xl transition duration-500 ${
            isChanging ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'
          }`}
        >
          {skills[section].text}
        </p>
        {/* Display counter */}
        <p className="text-3xl text-right text-[#777777] font-black">{counter}</p>
      </div>
    </div>
  );
};
