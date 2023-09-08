const Navbar = () => {
  return (
    <div className="navbar bg-base-200 md:hidden">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl font-medium">
          React Font Awesome
        </a>
      </div>
      <div className="flex-none">
        <label htmlFor="drawer" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-amber-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
