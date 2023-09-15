import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconsNumberAndFilters = ({
  totalIcons,
  tagsToFilterIcons: tags,
  addOrRemoveTagToFilterIcons,
}) => {
  return (
    <section className="flex items-center gap-x-3">
      <h3 className="text-lg tracking-wide font-bold text-blue-950">
        {totalIcons} Icons
      </h3>
      {!!tags.length && (
        <ul className="flex items-center gap-x-3">
          {tags.map((tag) => (
            <li key={Math.random()}>
              <button
                onClick={() => addOrRemoveTagToFilterIcons(tag)}
                className="group uppercase text-xs font-bold text-blue-950 flex gap-x-1 items-center py-2 px-4 bg-white border rounded-full"
              >
                <span className="group-hover:text-blue-500">{tag}</span>
                <FontAwesomeIcon
                  className="group-hover:text-red-600"
                  icon="fa-solid fa-xmark"
                />
              </button>
            </li>
          ))}
          <li>
            {/* remove all tags from tagsToFilterIcons state by sending reset parameter as true */}
            <button
              onClick={() => addOrRemoveTagToFilterIcons(undefined, true)}
              className="py-2 px-3 border rounded-full text-xs uppercase font-bold text-blue-950 hover:border-blue-500 hover:text-blue-500"
            >
              Reset
            </button>
          </li>
        </ul>
      )}
    </section>
  );
};

export default IconsNumberAndFilters;
