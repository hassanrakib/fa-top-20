import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SelectedCategory = ({ selectedCategory, setSelectedCategory }) => {
  if (!selectedCategory) return null;
  return (
    <button
      className="mt-6 btn btn-warning rounded-full capitalize"
      onClick={() => setSelectedCategory("")}
    >
      {selectedCategory} <FontAwesomeIcon className="text-lg text-red-500 font-black" icon="fa-regular fa-circle-xmark" />
    </button>
  );
};

export default SelectedCategory;
