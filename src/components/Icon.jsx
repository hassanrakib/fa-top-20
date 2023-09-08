import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Icon = ({ icon: { name, type } }) => {
  return (
    <div className="card sm:gap-y-2 sm:w-32 bg-base-100 hover:bg-amber-300 shadow-md hover:shadow-xl hover:cursor-pointer">
      <figure className="px-5 sm:px-10 pt-5 sm:pt-10">
        <FontAwesomeIcon className="text-2xl sm:text-4xl" icon={`fa-${type} fa-${name}`} />
      </figure>
      <div className="card-body items-center text-center p-2">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Icon;
