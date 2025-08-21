import { abilities } from "../constants";

export function Abilities() {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Abilities Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {abilities.map((t) => (
          <div
            key={t.title}
            className="p-6 border-2 rounded-lg bg-gray-700/45 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 flex items-center justify-center">
              <img src={t.imgPath} alt={t.title} className="max-w-full max-h-full" />
            </div>
            <div className="font-semibold text-xl mt-4">{t.title}</div>
            <div className="text-sm mt-2 text-gray-300">{t.desc}</div>
          </div>
        ))}
      </div>

      {/* Section Badge */}
      <div className="flex justify-center">
        <div className="mt-6 border-2 rounded-full px-6 py-2 bg-gray-700/45 text-sm sm:text-base">
          🤝 What I Bring To The Table
        </div>
      </div>

      {/* Section Heading */}
      <div className="flex justify-center text-center text-2xl sm:text-3xl lg:text-4xl mt-4 font-semibold">
        How I Can Contribute & My Key Skills
      </div>
    </div>
  );
}
