import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TopCategoriesAndSorting from "./components/TopCategoriesAndSorting";
import React from "react";
import ShowIcons from "./components/ShowIcons";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

// makes any of the icons in the font awesome packages to be referenced
// by icon name as a string in any component of the app
library.add(fas, far, fab);

const App = () => {
  // these are tags to filter out icons
  const [tagsToFilterIcons, setTagsToFilterIcons] = React.useState([]);

  // sort order to sort icons alphabetically
  // sortOrder = 0 for no sorting, 1 for alphabetical
  const [sortOrder, setSortOrder] = React.useState(0);

  // add new tag to the tagsToFilterIcons state
  // or remove the existing tag from the tagsToFilterIcons state
  const addOrRemoveTagToFilterIcons = (newTag, reset) => {
    // if reset true, remove all the tags
    if (reset) return setTagsToFilterIcons([]);

    // if the tag already in tagsToFilterIcons state, remove the tag
    if (tagsToFilterIcons.includes(newTag)) {
      const tagsToFilterIconsAfterRemove = tagsToFilterIcons.filter(
        (existingTag) => {
          return existingTag !== newTag;
        }
      );

      // finally set the state as we have new array of tags after removing the existing tag
      setTagsToFilterIcons(tagsToFilterIconsAfterRemove);
    } else {
      // add new tag to the tagsToFilterIcons state
      setTagsToFilterIcons((prevTagsToFilterIcons) => [
        ...prevTagsToFilterIcons,
        newTag,
      ]);
    }
  };

  // know that a tag is active or not
  const isTagActive = React.useCallback(
    (tagName) => {
      return tagsToFilterIcons.includes(tagName);
    },
    [tagsToFilterIcons]
  );

  return (
    <div>
      <header className="px-24">
        <Navbar />
        <Search />
        <TopCategoriesAndSorting
          isTagActive={isTagActive}
          addOrRemoveTagToFilterIcons={addOrRemoveTagToFilterIcons}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </header>
      <main className="px-28 py-7 bg-gray-100 flex gap-x-8">
        {/* sidebar */}
        <Sidebar
          isTagActive={isTagActive}
          addOrRemoveTagToFilterIcons={addOrRemoveTagToFilterIcons}
        />
        <ShowIcons
          tagsToFilterIcons={tagsToFilterIcons}
          addOrRemoveTagToFilterIcons={addOrRemoveTagToFilterIcons}
          sortOrder={sortOrder}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
