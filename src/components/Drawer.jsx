import React from "react";
import Icons from "./Icons";
import Navbar from "./Navbar";
import Categories from "./Categories";
import SelectedCategoryAndSortOrder from "./SelectedCategoryAndSortOrder";
import SortBy from "./SortBy";

const Drawer = () => {
  // parameterToLoadIcons state holds all the parameters that are sent during icons fetching
  // category defines the type of icons to load
  // sortOrder defines whether to sort icons in ascending (if ascending -> sortOrder: 1)
  // or descending (if descending -> sortOrder: -1)
  // or no sorting (if no sorting -> sortOrder: 0)
  const [parametersToLoadIcons, setParametersToLoadIcons] = React.useState({
    category: "",
    sortOrder: 0,
  });

  // function that set parametersToLoadIcons state
  const setParametersToLoadIconsState = (objectWithParameterProperty) => {
    setParametersToLoadIcons({...parametersToLoadIcons, ...objectWithParameterProperty});
  }

  return (
    // drawer open after medium breakpoint
    <div className="drawer md:drawer-open">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* navbar for small screen, hidden after medium breakpoint */}
        <Navbar />
        <SelectedCategoryAndSortOrder
          parametersToLoadIcons={parametersToLoadIcons}
          setParametersToLoadIconsState={setParametersToLoadIconsState}
        />
        <Icons parametersToLoadIcons={parametersToLoadIcons} />
      </div>
      <div className="drawer-side">
        <label htmlFor="drawer" className="drawer-overlay"></label>
        <ul className="menu p-2 md:w-52 lg:w-72 min-h-full bg-base-200 text-base-content">
          <li>
            <h1 className="text-2xl font-medium border-b">React Font Awesome</h1>
          </li>
          {/* show categories & let user to choose any category */}
          <Categories
            setParametersToLoadIconsState={setParametersToLoadIconsState}
          />
          {/* show the sorting option & let user to choose any sort order */}
          <SortBy
            parametersToLoadIcons={parametersToLoadIcons}
            setParametersToLoadIconsState={setParametersToLoadIconsState}
          />
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
