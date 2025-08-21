import toast from "react-hot-toast";
import { socialImgs } from "../constants";

export function Footer() {
  const handleclick = () => {
    toast("Under Construction !! 🙄 ");
  };

  return (
    <div className="p-6 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div
          onClick={handleclick}
          className="text-lg font-semibold cursor-pointer hover:underline"
        >
          Visit My Blog
        </div>
        <div className="flex space-x-5">
          {socialImgs.map((t) => (
            <a key={t.name} href={t.link} target="_blank">
              <img
                src={t.imgPath}
                alt={t.name}
                className="w-6 h-6 hover:scale-110 transition"
              />
            </a>
          ))}
        </div>
        <div className="text-sm text-gray-400 text-center md:text-right">
          © 2025 Subham Kumar. All rights reserved.
        </div>
      </div>
    </div>
  );
}
