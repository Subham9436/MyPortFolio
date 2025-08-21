import { counterItems } from "../constants";
import CountUp from "react-countup";
// Use of React Countup
export function EXP() {
  return (
   <div className="p-6 mt-120 md:mt-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {counterItems.map((t) => (
      <div
        key={t.value}
        className="p-6 border-2 rounded-lg bg-zinc-900 flex flex-col items-center text-center"
      >
        <h1 className="text-3xl font-extrabold">
          <CountUp suffix={t.suffix} end={t.value} />
        </h1>
        <p className="mt-2">{t.label}</p>
      </div>
    ))}
  </div>
</div>

  );
}
