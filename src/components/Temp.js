import React, { Component } from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";


 class Temp extends Component {
     state = {
         loading: false,
         totalResults: null,
         totalPages: null,
         results: []
     };




     componentDidMount () {

     }

      render() {

        const { totalResults, totalPages, results, loading } = this.state;

        return (
          <div className="about">
            <h2>Temp</h2>
          </div>
        );
      }
}

Temp.propTypes = {
  count: PropTypes.number
};

export default Temp;
