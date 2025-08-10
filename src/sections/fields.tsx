import { counterItems } from "../constants";

export function EXP() {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        {counterItems.map((t) => (
          <div
            key={t.value}
            className="p-10 mt-5 border-2 rounded-lg  w-75 bg-gray-700/45"
          >
            <div>
              <h1 className="text-3xl">
                {t.value}
                {t.suffix}
              </h1>
            </div>
            <div>{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
