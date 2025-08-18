import { SkillModel } from "../components/skillmodel/skils";
import { techStackIcons } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export function Skills() {
  useGSAP(() => {
    gsap.fromTo(
      "#skills",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  });

  return (
    <div id="skills">
      <div className="p-10 flex flex-col md:flex-row justify-between ">
        {techStackIcons.map((t) => (
          <div
            key={t.name}
            className=" mt-5 border-2 rounded-full  flex-center flex-col  bg-gray-700/45 md:size-69 "
          >
            <div>
              <SkillModel
                model={t.modelPath}
                scale={t.scale}
                rotation={t.rotation}
              />
            </div>
            <div className="mt-5">{t.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
