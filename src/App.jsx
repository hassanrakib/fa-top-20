import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

// makes any of the icons in the packages to be referenced
// by icon name as a string in any component of the app
library.add(fas, far, fab);

const App = () => {
  return (
    <div>
      
    </div>
  );
};

export default App;
