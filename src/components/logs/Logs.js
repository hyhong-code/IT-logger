import React, { useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || !logs) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && !logs.length ? (
          <p className="center">No logs to show</p>
        ) : (
          logs.map((log) => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = ({ log }) => ({ log });

export default connect(mapStateToProps, { getLogs })(Logs);
