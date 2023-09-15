import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  {
    key: 1,
    href: "#",
    text: "License",
  },
  {
    key: 2,
    href: "#",
    text: "Terms of Service",
  },
  {
    key: 3,
    href: "#",
    text: "Privacy Policy",
  },
  {
    key: 4,
    href: "#",
    text: "Refunds",
  },
];

const Footer = () => {
  return (
    <footer className="px-32 py-8 bg-blue-950 text-white">
      <div className="flex justify-between">
        <div className="text-sm font-light max-w-md">
          <FontAwesomeIcon
            className="text-2xl text-blue-500 mb-6"
            icon="fa-solid fa-font-awesome"
          />
          <div className="mb-4">
            <h3 className="text-base font-medium mb-2">
              Go Make Something Awesome
            </h3>
            <p>
              Font Awesome is the internet icon library and toolkit used by
              millions of designers, developers, and content creators.
            </p>
          </div>
          <p>
            Made with and in Bentonville, Boston, Chicago, Grand Rapids, Joplin,
            Kansas City, Seattle, Tampa, and Vergennes.
          </p>
        </div>
        <div className="flex gap-x-12 p-3">
          <div>
            <h3 className="text-gray-500 font-medium mb-3">Project</h3>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Commission Icons</a>
              </li>
              <li>
                <a href="#">All Versions</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 font-medium mb-3">Community</h3>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Icon Requests</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Blog Awesome</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-500 font-medium mb-3">Help</h3>
            <ul className="flex flex-col gap-y-2">
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Troubleshooting</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8 text-sm flex items-center">
        <ul className="flex gap-x-4">
          {links.map((link) => (
            <li key={link.key}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
        <span className="text-gray-400 ml-auto">© Fonticons, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
