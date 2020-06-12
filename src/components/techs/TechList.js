import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/techAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const TechList = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="modal" id="tech-list-modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechList.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = ({ tech }) => ({ tech });

export default connect(mapStateToProps, { getTechs })(TechList);
