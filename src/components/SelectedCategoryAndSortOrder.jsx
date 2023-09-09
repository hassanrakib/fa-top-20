import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectedCategoryAndSortOrder = ({
  parametersToLoadIcons,
  setParametersToLoadIconsState,
}) => {
  // destructure category and sortOrder
  const { category, sortOrder } = parametersToLoadIcons;

  // if no category and sortOrder then don't render the component
  if (!category && !sortOrder) return null;

  return (
    <div className="mt-6 flex gap-x-2">
      {category && (
        <button
          className="btn btn-warning rounded-full capitalize"
          // if clicked on this button clear the category
          onClick={() =>
            setParametersToLoadIconsState({ category: "" })
          }
        >
          {category}{" "}
          <FontAwesomeIcon
            className="text-lg text-red-500 font-black"
            icon="fa-regular fa-circle-xmark"
          />
        </button>
      )}
      {!!sortOrder && (
        <button
          className="btn btn-warning rounded-full capitalize"
          // if clicked on this button clear the sort order
          onClick={() =>
            setParametersToLoadIconsState({ sortOrder: 0 })
          }
        >
          {sortOrder === 1 ? "A To Z" : "Z To A"}{" "}
          <FontAwesomeIcon
            className="text-lg text-red-500 font-black"
            icon="fa-regular fa-circle-xmark"
          />
        </button>
      )}
    </div>
  );
};

export default SelectedCategoryAndSortOrder;
