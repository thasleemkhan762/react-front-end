import React from "react";

const Header = (props) => {
  return (
    <header className="w3-container w3-center">
      <h1>
        <b>{props.name}</b>
      </h1>
      <p style={{ display: props.display }}>
        {props.title}
        <span className="w3-tag">{props.admin}</span>
      </p>
    </header>
  );
};

export default Header;
