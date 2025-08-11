import { techStackImgs } from "../constants";

export function Skills() {
  return (
    <div>
      <div className="p-10 flex">
        {techStackImgs.map((t) => (
          <div
            key={t.name}
            className="p-4 mt-5 border-2 rounded-full  w-115 bg-gray-700/45 md:h-69"
          >
            <div className="flex-center md:flex-center">
              <img src={`${t.imgPath}`} />
            </div>
            <div className="flex-center md:flex-center">{t.name}</div>
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
