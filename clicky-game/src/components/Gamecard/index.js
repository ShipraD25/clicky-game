import React from "react";

import "./style.css";

function Gamecard(props) {
    return (
      <div className="card">
        <div className= "img-container">
            <img src={props.image}
            onClick={props.handleBtnClick(props.id)}/>
        </div>
      </div>
    );
  }
  
  export default Gamecard;
  