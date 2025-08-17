import { counterItems } from "../constants";
import CountUp from "react-countup";
// Use of React Countup
export function EXP() {
  return (
    <div className="p-10 mt-137 md:mt-11">
      <div className="flex justify-between">
        {counterItems.map((t) => (
          <div
            key={t.value}
            className="p-10 mt-5 border-2 rounded-lg  w-85 bg-zinc-900"
          >
            <div>
              <h1 className="text-3xl font-extrabold">
                <CountUp suffix={t.suffix} end={t.value} />
              </h1>
            </div>
            <div>{t.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
