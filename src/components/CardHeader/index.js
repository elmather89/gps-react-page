import React from "react";
import "./style.css";

function BookHeader(props) {
  return (
    <div className="card-header">{props.children}</div>
  );
}

export default BookHeader;