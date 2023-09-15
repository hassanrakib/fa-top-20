import React from "react";
import IconsNumberAndFilters from "./IconsNumberAndFilters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ShowIcons = ({ tagsToFilterIcons, addOrRemoveTagToFilterIcons, sortOrder }) => {
  
  // holds icons
  const [icons, setIcons] = React.useState([]);
  // know that the icons are loading or not
  const [isLoading, setIsLoading] = React.useState(true);

  // create a string of tags seperated by comma
  const tagsString = tagsToFilterIcons.join(",");

  // load icons and set icons state
  React.useEffect(() => {
    // set isLoading state to true to show the spinner
    setIsLoading(true);
    fetch(`https://react-font-awesome-server.onrender.com/icons?sortOrder=${sortOrder}&tags=${tagsString}`)
      .then((res) => res.json())
      .then((icons) => {
        // set the icons state
        setIcons(icons);

        // set isLoading state to false
        setIsLoading(false);
      });
  }, [sortOrder, tagsString]);

  // if icons are loading then show a spinner
  if (isLoading)
    return (
      <div className="grow flex justify-center items-center">
        <FontAwesomeIcon
          className="animate-spin text-2xl text-blue-900"
          icon="fa-solid fa-spinner"
        />
      </div>
    );

  return (
    <div className="grow flex flex-col gap-y-7">
      {/* show the number of icons, filters & reset button to remove filters */}
      <IconsNumberAndFilters
        totalIcons={icons.length}
        tagsToFilterIcons={tagsToFilterIcons}
        addOrRemoveTagToFilterIcons={addOrRemoveTagToFilterIcons}
      />
      <section className="grid grid-cols-6 gap-3">
        {icons.map((icon) => (
          <article key={icon._id}>
            <button className="w-full h-full rounded-xl px-3 pt-6 pb-4 bg-white hover:bg-yellow-300 flex flex-col justify-center items-center gap-y-6">
              <span>
                <FontAwesomeIcon
                  className="text-4xl text-blue-950"
                  icon={`fa-${icon.type} fa-${icon.name}`}
                />
              </span>
              <span className="text-xs font-light">{icon.name}</span>
            </button>
          </article>
        ))}
      </section>
    </div>
  );
};

export default ShowIcons;
