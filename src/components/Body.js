import React from "react";

const Body = props => {
  console.log(props, "<--- Body props");
  return (
    <>
      <p>{props.date}</p>
      <p>{props.explanation}</p>
      <p>{props.copyright}</p>
    </>
  );
};

export default Body;
