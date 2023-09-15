import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopCategoryBtn from "./TopCategoryBtn";

const categories = [
  {
    key: 1,
    name: "classic",
    icon: "fa-solid fa-icons",
  },
  {
    key: 2,
    name: "sharp",
    icon: "fa-solid fa-icons",
  },
  {
    key: 3,
    name: "brands",
    icon: "fa-solid fa-font-awesome",
  },
  {
    key: 4,
    name: "free",
    icon: "fa-solid fa-bolt",
  },
];

const grids = [
  {
    key: 1,
    icon: "fa-solid fa-table-cells-large",
  },
  {
    key: 2,
    icon: "fa-solid fa-table-cells",
  },
  {
    key: 3,
    icon: "fa-solid fa-bars",
  },
];

const TopCategoriesAndSorting = ({
  isTagActive,
  addOrRemoveTagToFilterIcons,
  sortOrder,
  setSortOrder,
}) => {
  return (
    <div className="mt-8 max-w-6xl mx-auto flex justify-between items-center">
      {/* main categories */}
      <div className="flex space-between gap-x-3">
        {categories.map((category) => {
          // check that a category is active or not
          const active = isTagActive(category.name);
          return (
            <TopCategoryBtn
              key={category.key}
              category={category}
              active={active}
              addOrRemoveTagToFilterIcons={addOrRemoveTagToFilterIcons}
            />
          );
        })}
      </div>
      {/* grids and sorting */}
      <div className="flex space-between">
        {grids.map((grid) => (
          <button key={grid.key} className="group py-2 px-4">
            <FontAwesomeIcon
              className="text-xl text-blue-950 group-hover:text-blue-500"
              icon={grid.icon}
            />
          </button>
        ))}
        <select
          value={sortOrder}
          // set sortOrder state
          onChange={(e) => setSortOrder(e.target.value)}
          className="ml-2 px-8 py-3 bg-white border-double border-transparent outline outline-2 outline-gray-300 rounded-lg items-center"
          style={{ borderRightWidth: "18px" }}
        >
          <option value={0}>Featured</option>
          <option value={1}>Alphabetical</option>
        </select>
        <select
          defaultValue={0}
          className="ml-3 px-8 py-3 bg-white border-double border-transparent outline outline-2 outline-gray-300 rounded-lg items-center"
          style={{ borderRightWidth: "18px" }}
        >
          <option value={0}>6.4.2</option>
          <option value={1}>5.5.6</option>
          <option value={-1}>6.0.3</option>
        </select>
      </div>
    </div>
  );
};

export default TopCategoriesAndSorting;
