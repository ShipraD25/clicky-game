import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Gamecard from "./components/Gamecard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Images from "./images.json"

class App extends Component {
  state = {
      currentscore: 0,
      topscore: 0,
      clicked: [],
      message: ""
}

componentDidMount() {
  
}
}
export default App;
