import { words } from "../constants";
import { Ranger } from "./ranger";

export function Hero() {
  return (
    <div className="flex">
      <div>
        <div>
          <div className="text-6xl font-semibold p-10">
            <div className="flex">
              <h1>Shaping</h1>
              <span className="slide">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span
                      key={index}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={`${word.imgPath}`}
                        className="bg-white p-2 rounded-full xl:size-12 md:size-10 size-7"
                      ></img>
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </div>
            <div>
              into Real Projects
              <br /> that Deliver Results
            </div>
          </div>
          <span className="p-11 space-x-2 ">
            Hi! , I am Subham , a developer based in India with coding interest{" "}
          </span>
        </div>
        <div>
          <button
            className="bg-white rounded-lg flex-center text-black p-3 font-semibold ml-10 mt-2 "
            style={{ cursor: "pointer" }}
          >
            See My Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Right Hero Model */}
      <figure>
        <div className="size-95  md:p-10 ml-38">
          <Ranger />
        </div>
      </figure>
    </div>
  );
}
