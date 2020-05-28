import React, { Component } from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";


class AdvSearch extends Component {

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
            <div className="advSearch">
                <div className="back" onClick={this.goBack}>

                </div>

                <h2>Advanced search</h2>
                <div>
                    ...I promise to realize it if you hire me ...<br />
                    Just kidding! :-D
                    <br />
                    <br />
                    <br />
                    Frontend Challenge v1.0 realized for Global Gaming
                    <span>G.C.</span>

                </div>
            </div>
        );
    }
}


export default AdvSearch;
