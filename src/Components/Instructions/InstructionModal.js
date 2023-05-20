import React from "react";
import Instructions from "./Instructions";

// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a

const InstructionModal = (props) => {
  //   This block means we will handle show/hide by props.show value so we possibly have 2 use cases in App.js

  // <Modal show={true} />: show the modal
  // <Modal show={false} />: hide the modal
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4>How to play the game War!</h4>
        </div>
        {/* <div > */}
        <Instructions />
        {/* </div> */}
        <div className="modal-footer">
          <button
            onClick={props.onClose}
            id="btn-login"
            className="btn btn-lg btn-block"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;
