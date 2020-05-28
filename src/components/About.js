import React, { Component } from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";


 class About extends Component {

     constructor(props) {
         super(props);

         this.goBack = this.goBack.bind(this);
     }

     state = {
         loading: false,
     };

     goBack(){
         this.props.history.goBack();
     }


     componentDidMount () {

     }

      render() {

        const { totalResults, totalPages, results, loading } = this.state;

        return (
          <div className="about">
            <div className="back" onClick={this.goBack}>

            </div>

            <h2>About</h2>
              <div>
                  Simple about page...
                  <div>
                      Frontend Challenge v1.0 realized for Global Gaming
                        <span>G.C.</span>
                  </div>
              </div>
          </div>
        );
      }
}

About.propTypes = {
  count: PropTypes.number
};

export default About;
