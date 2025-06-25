import { links } from "../data/navbar";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white border border-black/10 rounded-lg mt-10">
      <img src="/img/logo.png" alt="KodeinTekno" className="h-8" />
      <ul className="flex gap-8 items-center">
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={"#" + (link == "Beranda" ? "" : link.toLowerCase())}
              className="text-black/60 font-medium"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
