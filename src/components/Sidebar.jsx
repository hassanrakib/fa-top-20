import SidebarCategories from "./SidebarCategories";

const styleCategories = {
  title: "Style",
  list: [
    {
      key: 1,
      name: "solid",
      icon: "fa-solid fa-circle",
      totalResult: 6440,
    },
    {
      key: 2,
      name: "regular",
      icon: "fa-solid fa-circle-half-stroke",
      totalResult: 6440,
    },
    {
      key: 3,
      name: "light",
      icon: "fa-regular fa-circle",
      totalResult: 6440,
    },
  ],
};

const genreCategories = {
  title: "Categories",
  list: [
    {
      key: 1,
      name: "arrows",
      icon: "fa-solid fa-square-arrow-up-right",
      totalResult: 1952,
    },
    {
      key: 2,
      name: "shapes",
      icon: "fa-solid fa-shapes",
      totalResult: 504,
    },
  ],
};

const Sidebar = ({ isTagActive, addOrRemoveTagToFilterIcons }) => {
  return (
    <aside className="flex flex-col gap-y-5">
      <SidebarCategories
        categories={styleCategories}
        isTagActive={isTagActive}
        addOrRemoveTagToFilterIcons={addOrRemoveTagToFilterIcons}
      />
      <SidebarCategories
        categories={genreCategories}
        isTagActive={isTagActive}
        addOrRemoveTagToFilterIcons={addOrRemoveTagToFilterIcons}
      />
    </aside>
  );
};

export default Sidebar;
