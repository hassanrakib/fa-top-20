import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
}) => {
  return (
    <div className="mt-8 max-w-5xl mx-auto flex justify-between items-center">
      <div className="flex space-between gap-x-3">
        {categories.map((category) => {
          // check that this category is active or not
          const active = isTagActive(category.name);
          return (
            <button
              // add new tag to filter out icons
              onClick={() => addOrRemoveTagToFilterIcons(category.name)}
              key={category.key}
              className={`group flex flex-col items-center pt-6 pb-5 px-10 gap-y-2 border-b-4 hover:border-blue-500${
                active ? " border-blue-500" : " border-transparent"
              }`}
            >
              <FontAwesomeIcon
                className={`text-3xl group-hover:text-blue-500${
                  active ? " text-blue-500" : " text-blue-950"
                }`}
                icon={category.icon}
              />
              <span
                className={`capitalize text-sm group-hover:text-blue-500${
                  active ? " text-blue-500" : " text-gray-700"
                }`}
              >
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
      <div className="flex space-between">
        {grids.map((grid) => (
          <button key={grid.key} className="group py-2 px-4">
            <FontAwesomeIcon
              className="text-xl text-blue-950 group-hover:text-blue-500"
              icon={grid.icon}
            />
          </button>
        ))}
        {/* sorting */}
        <select
          value={0}
          className="ml-2 px-8 py-3 bg-white border-double border-transparent outline outline-2 outline-gray-300 rounded-lg items-center"
          style={{ borderRightWidth: "18px" }}
        >
          <option value={0} disabled>
            Sort By
          </option>
          <option value={1}>A To Z</option>
          <option value={-1}>Z To A</option>
        </select>
        <select
          value={0}
          className="ml-3 px-8 py-3 bg-white border-double border-transparent outline outline-2 outline-gray-300 rounded-lg items-center"
          style={{ borderRightWidth: "18px" }}
        >
          <option value={0} disabled>
            6.4.2
          </option>
          <option value={1}>5.5.6</option>
          <option value={-1}>6.0.3</option>
        </select>
      </div>
    </div>
  );
};

export default TopCategoriesAndSorting;
