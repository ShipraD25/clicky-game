import React from "react";

import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
        return (
          <nav class="navbar navbar-inverse">
            <ul class="nav navbar-nav">
              <li>Clicky-Game</li>
              <li id="message">{props.message}</li>
              <li>Score: {props.score} | Top Score: {props.topscore}</li>
            </ul>
          </nav>

        );
      }
      

export default Navbar;
