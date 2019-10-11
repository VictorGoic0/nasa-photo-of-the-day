import React from "react";

const Error = props => {
  console.log(props);
  return (
    <div>
      <h1>{props.error.statusText}</h1>
      <h1>{props.error.status}</h1>
    </div>
  );
};

export default Error;
