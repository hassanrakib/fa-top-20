import React from "react";
import Icon from "./Icon";
import Modal from "./Modal";

const Icons = ({ parametersToLoadIcons: { category, sortOrder } }) => {
  // holds icons
  const [icons, setIcons] = React.useState([]);
  // know that the icons are loading or not
  const [isLoading, setIsLoading] = React.useState(false);

  // set icon to show in modal
  const [iconToShowInModal, setIconToShowInModal] = React.useState(null);

  React.useEffect(() => {
    // if iconToShowInModal other then null call the showModal method
    if (iconToShowInModal) document.getElementById("modal").showModal();
  }, [iconToShowInModal]);

  React.useEffect(() => {
    // set isLoading state to true to show the spinner
    setIsLoading(true);
    fetch(
      `http://localhost:5000/icons?category=${category}&sortOrder=${sortOrder}`
    )
      .then((res) => res.json())
      .then((icons) => {
        // set the icons state
        setIcons(icons);

        // set isLoading state to false
        setIsLoading(false);
      });
  }, [category, sortOrder]);

  // if icons are loading, then do render the spinner
  if (isLoading) {
    return (
      <span className="loading loading-spinner mt-52 md:mt-0 w-16 text-warning"></span>
    );
  }

  return (
    <div className="mt-6 px-4 w-full sm:w-auto grid sm:grid-cols-4 lg:grid-cols-5 gap-5 icons-grid-before-sm-breakpoint">
      {icons.map((icon) => (
        <Icon
          key={icon._id}
          icon={icon}
          setIconToShowInModal={setIconToShowInModal}
        />
      ))}
      {iconToShowInModal && <Modal iconToShowInModal={iconToShowInModal} />}
    </div>
  );
};

export default Icons;
