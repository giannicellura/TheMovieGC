/* eslint-disable linebreak-style */

import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useParams
} from "react-router-dom";

import Autocomplete from "./Autocomplete";



const Header = (props) => {
    return(

        <div className="header">
            <nav>
                <ul className="menu">
                    <li><Link to="/"  >Home</Link></li>
                    <li><Link to="/AdvSearch"  >Search+</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <div className="search">
                    <Autocomplete/>
                </div>

            </nav>
        </div>

)};

export default Header

