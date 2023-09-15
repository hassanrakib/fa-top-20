const SortBy = ({
  parametersToLoadIcons: { sortOrder },
  setParametersToLoadIconsState,
}) => {
  return (
    <select
      value={sortOrder}
      className="select select-warning w-full max-w-xs"
      // set sortOrder in the state
      onChange={(e) => {
        setParametersToLoadIconsState({
          sortOrder: parseInt(e.target.value),
        });
      }}
    >
      <option value={0} disabled>
        Sort By
      </option>
      <option value={1}>A To Z</option>
      <option value={-1}>Z To A</option>
    </select>
  );
};

export default SortBy;
