import React from "react";

const Header = props => {
  return (
    <>
      <h1>{props.title}</h1>
      <img src={props.imageUrl} alt={props.title}></img>
    </>
  );
};

export default Header;
