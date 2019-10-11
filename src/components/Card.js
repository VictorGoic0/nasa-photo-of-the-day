import React from "react";
import Header from "./Header";
import Body from "./Body";

const Card = props => {
  return (
    <>
      <Header imageUrl={props.apod.url} title={props.apod.title} />
      <Body
        date={props.apod.date}
        explanation={props.apod.explanation}
        copyright={props.apod.copyright}
      />
    </>
  );
};

export default Card;
