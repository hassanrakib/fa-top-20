import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLinks from "./FooterLinks";

const bottomLinks = [
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

const projectLinks = {
  title: "Project",
  list: [
    {
      key: 1,
      href: "#",
      text: "Download",
    },
    {
      key: 2,
      href: "#",
      text: "Changelog",
    },
    {
      key: 3,
      href: "#",
      text: "Commission Icons",
    },
    {
      key: 4,
      href: "#",
      text: "All Versions",
    },

  ],
};

const communityLinks = {
  title: "Community",
  list: [
    {
      key: 1,
      href: "#",
      text: "Github",
    },
    {
      key: 2,
      href: "#",
      text: "Icon Requests",
    },
    {
      key: 3,
      href: "#",
      text: "Twitter",
    },
    {
      key: 4,
      href: "#",
      text: "Blog Awesome",
    },

  ],
};
const helpLinks = {
  title: "Help",
  list: [
    {
      key: 1,
      href: "#",
      text: "Support",
    },
    {
      key: 2,
      href: "#",
      text: "Troubleshooting",
    },
    {
      key: 3,
      href: "#",
      text: "Contact Us",
    },
    {
      key: 4,
      href: "#",
      text: "Status",
    },

  ],
};
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
          <FooterLinks links={projectLinks} />
          <FooterLinks links={communityLinks} />
          <FooterLinks links={helpLinks} />
        </div>
      </div>
      {/* footer bottom links */}
      <div className="mt-8 text-sm flex items-center">
        <ul className="flex gap-x-4">
          {bottomLinks.map((link) => (
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
