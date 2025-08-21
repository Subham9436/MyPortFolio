import toast from "react-hot-toast";
import { socialImgs } from "../constants";

export function Footer() {
  const handleclick = () => {
    toast("Under Construction !! 🙄 ");
  };

  return (
    <div className="p-10">
      <div className="flex-center justify-between ">
        <div onClick={handleclick} style={{ cursor: "pointer" }}>
          Visit My Blog
        </div>
        <div className="flex ml-10 space-x-5 md:ml-60">
          {socialImgs.map((t) => (
            <div key={t.name}>
              <a href={`${t.link}`}>
                <img src={`${t.imgPath}`}></img>
              </a>
            </div>
          ))}
        </div>
        <div>© 2025 Subham Kumar.All rights reserved</div>
      </div>
    </div>
  );
}
