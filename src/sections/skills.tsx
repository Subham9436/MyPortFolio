import { SkillModel } from "../components/skillmodel/skils";
import { techStackIcons, techStackImgs } from "../constants";

export function Skills() {
  return (
    <div id="skills">
      <div className="p-10 flex">
        {techStackIcons.map((t) => (
          <div
            key={t.name}
            className="p-4 mt-5 border-2  flex-center flex-col md:flex-col  w-115 bg-gray-700/45 md:h-69"
          >
            <div><SkillModel /></div>
            <div className="mt-5">{t.name}</div>
          </div>
        ))}
      </div>
      <div className="flex-center">
        <div className=" mt-5 border-2 rounded-full w-85 bg-gray-700/45 flex-center">
          📄Have questions or ideas? Let’s talk!🚀
        </div>
      </div>
    </div>
  );
}
