const categories = [
  { id: 1, name: "solid" },
  { id: 2, name: "regular" },
  { id: 3, name: "brands" },
];

const Categories = ({ setParametersToLoadIconsState }) => {
  return (
    <ul className="mt-8">
      <li>
        <h3 className="text-xl font-light">Categories</h3>
      </li>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            className="capitalize"
            onClick={() =>
              setParametersToLoadIconsState({ category: category.name })
            }
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
