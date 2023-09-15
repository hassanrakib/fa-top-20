import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLinks = [
  {
    key: 2,
    href: "#",
    text: "Start",
  },
  {
    key: 3,
    href: "#",
    icon: <FontAwesomeIcon className="text-gray-800" icon="fa-solid fa-magnifying-glass" />,
  },
  {
    key: 4,
    href: "#",
    text: "Icons",
  },
  {
    key: 5,
    href: "#",
    text: "Docs",
  },
  {
    key: 6,
    href: "#",
    text: "Plans",
  },
  {
    key: 7,
    href: "#",
    text: "Support",
  },
  {
    key: 8,
    href: "#",
    text: "Podcast",
  },
];

const Navbar = () => {
  return (
    <nav className="flex py-4 justify-between items-center">
      <div className="flex items-center">
        <a className="py-2.5 px-4" href="/">
          <FontAwesomeIcon
            className="text-2xl text-blue-500"
            icon="fa-solid fa-font-awesome"
          />
        </a>
        <ul className="ml-12 flex items-center">
          {navLinks.map((link) => (
            <li className="py-2.5 px-4 mr-4" key={link.key}>
              <a className="text-gray-500 hover:text-blue-500" href={link.href}>
                {link.text || link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a className="py-2.5 px-4" href="#">
        <FontAwesomeIcon
          className="text-gray-500 text-2xl"
          icon="fa-solid fa-right-to-bracket"
        />
      </a>
    </nav>
  );
};

export default Navbar;
