const FooterLinks = ({ links }) => {
  return (
    <div>
      <h3 className="text-gray-500 font-medium mb-3">{links.title}</h3>
      <ul className="flex flex-col gap-y-2">
        {links.list.map((link) => (
          <li key={link.key}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
