import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from "./Tabs";

const Modal = ({ iconToShowInModal }) => {
  //   destructure the properties
  const { type, name } = iconToShowInModal;

  // know the active tab
  const [activeTabId, setActiveTabId] = React.useState(1);

  return (
    <dialog id="modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button
            className="btn btn-sm btn-circle btn-ghost focus:outline-0 absolute right-2 top-2"
            // when closing the modal set activeTabId to 1
            onClick={() => setActiveTabId(1)}
          >
            ✕
          </button>
        </form>
        {/* card */}
        <div className="card">
          {/* show the icon */}
          <figure>
            <FontAwesomeIcon size="9x" icon={`fa-${type} fa-${name}`} />
          </figure>
          <Tabs
            iconType={type}
            iconName={name}
            activeTabId={activeTabId}
            setActiveTabId={setActiveTabId}
          />
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
