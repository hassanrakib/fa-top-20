import React from "react";
import Icons from "./Icons";
import Navbar from "./Navbar";
import Categories from "./Categories";
import SelectedCategory from "./SelectedCategory";

const Drawer = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("");

  return (
    // drawer open after medium breakpoint
    <div className="drawer md:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* navbar for small screen, hidden after medium breakpoint */}
        <Navbar />
        <SelectedCategory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Icons selectedCategory={selectedCategory} />
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <ul className="menu p-2 md:w-52 lg:w-72 min-h-full bg-base-200 text-base-content">
          <li>
            <h1 className="text-2xl font-medium">React Font Awesome</h1>
          </li>
          <li className="mt-8">
            <h3 className="text-xl font-light">Categories</h3>
          </li>
          {/* show categories */}
          <Categories setSelectedCategory={setSelectedCategory} />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
