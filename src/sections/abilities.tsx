import { abilities } from "../constants";

export function Abilities() {
  return (
    <div>
      <div className="flex justify-between p-10">
        {abilities.map((t) => (
          <div
            key={t.title}
            className="p-10 mt-5 border-2 rounded-lg  w-115 bg-gray-700/45"
          >
            <div>
              <img src={`${t.imgPath}`} />
            </div>
            <div className="font-semibold text-2xl">{t.title}</div>
            <div>{t.desc}</div>
          </div>
        ))}
      </div>
      <div className="flex-center">
        <div className=" mt-5 border-2 rounded-full w-75 bg-gray-700/45 flex-center">
          🤝What I bring To the Table
        </div>
      </div>
      <div className="flex-center text-4xl mt-3 font-semibold">
        How I Can Contribute & My Key Skills
      </div>
    </div>
  );
}
