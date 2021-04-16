import React from "react";

function DisplayComponent(props) {
  return (
    <div>
      <span>{(props.time.h<10)?"0"+props.time.h:props.time.h}</span>&nbsp;:&nbsp;
      <span>{(props.time.m<10)?"0"+props.time.m:props.time.m}</span>&nbsp;:&nbsp;
      <span>{(props.time.s<10)?"0"+props.time.s:props.time.s}</span>
    </div>
  );
}

export default DisplayComponent;