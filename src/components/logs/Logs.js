import React, { useEffect, useState } from "react";
import LogItem from "./LogItem";
import PropTypes from "prop-types";

const Logs = (props) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
    console.log(logs);
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch("/logs");
    const data = await res.json();
    setLogs(data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
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
          logs.map((log) => <LogItem log={log} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {};

export default Logs;
