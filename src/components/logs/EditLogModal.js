import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";

const EditLogModal = ({ updateLog, log: { current } }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const handleSubmit = (evt) => {
    if (!message || !tech) {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const updated = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(updated);
      M.toast({ html: `Log updated by ${tech}` });
      // Clear Fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(evt) => setMessage(evt.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(evt) => setTech(evt.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Does">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={() => setAttention(!attention)}
                />
                <span>Needs Atttention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

EditLogModal.propTypes = {
  log: PropTypes.object.isRequired,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = ({ log }) => ({ log });

export default connect(mapStateToProps, { updateLog })(EditLogModal);
