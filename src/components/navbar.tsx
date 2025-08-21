import { navLinks } from "../constants";

export function Navbar() {
  return (
    <nav className="p-10 bg-[url(/images/bg.png)] ">
      <div className="flex-center bg-gray-700/35 rounded-lg p-5 justify-between ">
        <div className="font-semibold text-2xl">
          <a href="#hero">Subham Kumar</a>
        </div>
        <div>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.link}>
                <a href={`${link.link}`}>{`${link.name}`}</a>
              </li>
            ))}
          </ul>
        </div>
        <a href="#form">
          <button
            className="bg-white text-black p-2 rounded-lg flex-center font-semibold"
            style={{ cursor: "pointer" }}
          >
            Contact Me
          </button>
        </a>
      </div>
    </nav>
  );
}
