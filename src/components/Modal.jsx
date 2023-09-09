import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ iconToShowInModal }) => {
  // know the active tab
  const [activeTabId, setActiveTabId] = React.useState(1);

  //   destructure the properties
  const { type, name } = iconToShowInModal;

  const tabs = [
    { id: 1, name: "Global", jsx: "" },
    { id: 2, name: "Dynamic", jsx: "" },
    { id: 3, name: "Individual", jsx: "" },
  ];
  

  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost focus:outline-0 absolute right-2 top-2">
            ✕
          </button>
        </form>
        {/* card */}
        <div className="card">
          {/* show the icon */}
          <figure>
            <FontAwesomeIcon size="9x" icon={`fa-${type} fa-${name}`} />
          </figure>
          <div className="card-body p-0">
            <div className="tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.id}
                  className={`tab tab-bordered${
                    activeTabId === tab.id ? " tab-active" : ""
                  }`}
                  onClick={() => setActiveTabId(tab.id)}
                >
                  {tab.name}
                </a>
              ))}
            </div>
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
