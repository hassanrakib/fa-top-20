import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TopCategoryBtn = ({category, active, addOrRemoveTagToFilterIcons}) => {
  return (
    <button
      // add or remove tag to filter out icons
      onClick={() => addOrRemoveTagToFilterIcons(category.name)}
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
};

export default TopCategoryBtn;
