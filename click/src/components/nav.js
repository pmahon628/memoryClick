import React, {Component} from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

// import Axios from "axios";

class pageNav extends Component {

  return (
  <Router>
    <ul>
        </li>
        <li className="nav-item">
          
          <a className="nav-link" href="/bands">Band Memory</a>
          
        </li>
        <li className="nav-item">
         
          <a className="nav-link" href="/movies">Movies Memory</a>
        </ul>
        
    </Router>
  );

export default pageNav;