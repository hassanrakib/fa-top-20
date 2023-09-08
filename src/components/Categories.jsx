const categories = [
  { id: 1, name: "solid" },
  { id: 2, name: "regular" },
  { id: 3, name: "brands" },
];

const Categories = ({ setSelectedCategory }) => {
  return (
    <>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            className="capitalize"
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </>
  );
};

export default Categories;
