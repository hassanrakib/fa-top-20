import React from "react";

const Tabs = ({ iconType, iconName, activeTabId, setActiveTabId }) => {
  // function that convert icon names to camelcase by removing hyphens
  function convertIconNameToPascalCase(inputIconName) {
    return inputIconName
      .replace(/-([a-z])/g, function (match, group1) {
        // Capitalize the first letter and return it followed by the uppercase group1
        return group1.toUpperCase();
      })
      .replace(/^\w/, (firstLetter) => firstLetter.toUpperCase());
  }

  // tabs and their data
  const tabs = React.useMemo(
    () => [
      {
        id: 1,
        name: "Global",
        jsx: `<FontAwesomeIcon icon="fa-${iconType} fa-${iconName}" />`,
      },
      {
        id: 2,
        name: "Dynamic",
        jsx: `<FontAwesomeIcon icon={${iconType}("${iconName}")} />`,
      },
      {
        id: 3,
        name: "Individual",
        jsx: `<FontAwesomeIcon icon="fa${convertIconNameToPascalCase(
          iconName
        )}" />`,
      },
    ],
    [iconName, iconType]
  );
  return (
    <div className="card-body p-0">
      {/* show tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <a
            key={tab.id}
            // add "tab-active" class based on activeTabId
            className={`tab tab-bordered${
              activeTabId === tab.id ? " tab-active" : ""
            }`}
            // set activeTabId
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.name}
          </a>
        ))}
      </div>
      <h2 className="card-title">{`${tabs[activeTabId - 1].name} Import`}</h2>
      {/* show the code that user can use */}
      <code className="bg-amber-400 p-2">{tabs[activeTabId - 1].jsx}</code>
    </div>
  );
};

export default Tabs;
