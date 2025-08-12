import { socialImgs } from "../constants";

export function Footer() {
  return (
    <div className="p-10">
      <div className="flex-center justify-between ">
        <div>Visit My Blog</div>
        <div className="flex ml-10 space-x-5 md:ml-60">
          {socialImgs.map((t) => (
            <img src={`${t.imgPath}`}></img>
          ))}
        </div>
        <div>© 2025 Subham Kumar.All rights reserved</div>
      </div>
    </div>
  );
}
