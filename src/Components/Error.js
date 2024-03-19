import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>

      <Link to="/">
        <button>Go to homepage</button>
      </Link>
    </div>
  );
};

export default Error;
