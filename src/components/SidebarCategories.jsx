import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarCategories = ({
  categories: { title, list },
  isTagActive,
  addOrRemoveTagToFilterIcons,
}) => {
  return (
    <div>
      <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase">
        {title}
      </h3>
      <ul className="mt-2 flex flex-col gap-y-1">
        {list.map((category) => {
          // know that a category is active or not
          const active = isTagActive(category.name);
          return (
            <li key={category.key} className="w-64">
              <button
                // add or remove a category to filter out icons
                onClick={() => addOrRemoveTagToFilterIcons(category.name)}
                className={`${
                  active ? "bg-blue-600 text-white " : ""
                }group w-full p-2 text-gray-600 text-sm border border-transparent rounded-lg hover:border-gray-300 flex items-center`}
              >
                <FontAwesomeIcon
                  className={active ? "hidden" : "group-hover:hidden"}
                  icon={category.icon}
                />
                <FontAwesomeIcon
                  className={active ? "hidden" : "hidden group-hover:block"}
                  icon="fa-regular fa-square"
                />
                <FontAwesomeIcon
                  className={active ? "block" : "hidden"}
                  icon="fa-solid fa-square-check"
                />
                <span className="ml-3 capitalize">{category.name}</span>
                <span className="grow text-end font-light">
                  {category.totalResult}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SidebarCategories;
