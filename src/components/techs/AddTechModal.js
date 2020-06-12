import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (evt) => {
    if (!firstName || !lastName) {
      M.toast({ html: "Please enter firstname and lastname" });
    } else {
      console.log(firstName, lastName);

      // Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(evt) => setFirstName(evt.target.value)}
            />
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(evt) => setLastName(evt.target.value)}
            />
            <label htmlFor="message" className="active">
              First Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={handleSubmit}
          className="modal-close waves-effect blue
           btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
