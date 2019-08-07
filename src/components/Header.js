import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const style = {
    display: "inline-block",
    margin: 10,
    marginBottom: 30
  };
  return (
    <div>
      <div>
        <h4 style={style}>
          <Link to="/">Home</Link>
        </h4>
        <h4 style={style}>
          <Link to="/jokes">Jokes</Link>
        </h4>
      </div>
      {props.children}
    </div>
  );
};

export default Header;
