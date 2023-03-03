import React from "react";
import ReactDOM  from "react-dom";

function Grettings(){
  return (
    <>
      <h3>I am good. How are you</h3>
      <h3> Good Morning</h3>
      </>
  );
}

ReactDOM.render(<Grettings/>, document.getElementById("root"));