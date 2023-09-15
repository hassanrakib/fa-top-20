import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = [
  {
    key: 1,
    name: "Solid",
    icon: "fa-solid fa-circle",
    totalResult: 6440,
  },
  {
    key: 2,
    name: "Regular",
    icon: "fa-solid fa-circle-half-stroke",
    totalResult: 6440,
  },
  {
    key: 3,
    name: "Light",
    icon: "fa-regular fa-circle",
    totalResult: 6440,
  },
];

const categories = [
  {
    key: 1,
    name: "Arrows",
    icon: "fa-solid fa-square-arrow-up-right",
    totalResult: 1952,
  },
  {
    key: 2,
    name: "Shapes",
    icon: "fa-solid fa-shapes",
    totalResult: 504,
  },
];

const SidebarCategories = () => {
  return (
    <aside className="flex flex-col gap-y-5">
      <div>
        <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
          Style
        </h3>
        <ul className="mt-2">
          {styles.map((style) => (
            <li
              key={style.key}
              className="w-64 p-2 border border-transparent rounded-lg hover:border-gray-300"
            >
              <button className="group w-full text-gray-600 text-sm flex items-center">
                <FontAwesomeIcon
                  className="group-hover:hidden"
                  icon={style.icon}
                />
                <FontAwesomeIcon
                  className="hidden group-hover:block"
                  icon="fa-regular fa-square"
                />
                <span className="ml-3">{style.name}</span>
                <span className="grow text-end font-light">{style.totalResult}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
          Categories
        </h3>
        <ul className="mt-2">
          {categories.map((category) => (
            <li
              key={category.key}
              className="w-64 p-2 border border-transparent rounded-lg hover:border-gray-300"
            >
              <button className="group w-full text-gray-600 text-sm flex items-center">
                <FontAwesomeIcon
                  className="group-hover:hidden"
                  icon={category.icon}
                />
                <FontAwesomeIcon
                  className="hidden group-hover:block"
                  icon="fa-regular fa-square"
                />
                <span className="ml-3">{category.name}</span>
                <span className="grow text-end font-light">{category.totalResult}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarCategories;
