import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import TopCategoriesAndSorting from "./components/TopCategoriesAndSorting";
import SidebarCategories from "./components/SidebarCategories";
import React from "react";
import ShowIcons from "./components/ShowIcons";
import Footer from "./components/Footer";

// makes any of the icons in the packages to be referenced
// by icon name as a string in any component of the app
library.add(fas, far, fab);

const App = () => {
  // these are tags to filter out icons
  const [tags,setTags] = React.useState([]);

  return (
    <div>
      <header className="px-24">
        <Navbar />
        <Search />
        <TopCategoriesAndSorting setTags={setTags} />
      </header>
      <main className="px-28 py-7 bg-gray-100 flex gap-x-8">
          {/* sidebar */}
          <SidebarCategories setTags={setTags} />
          <ShowIcons tags={tags} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
