import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../lib/api";
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {addMovieDetail} from "../actions/movieAction";

class Details extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: null
        };

        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.history.goBack();
    }


    componentDidMount () {
        let movieId = this.props.match.params.id;
        //console.log("ALLDATA-->",this.props, this.state)
        this.getDetails(movieId);
    }



    getDetails = (movieId) => {
        let flagFetchData = false;
        (this.props.movieReducer.movieDetail) ? null : flagFetchData = true ;
        //console.log("FETCH",flagFetchData)

        if (flagFetchData) {

            api.getDetails(movieId)
                .then((response) => {
                    console.log("EXEC",response, this.props);

                    this.setState({
                        isLoaded: true,
                        data: response.data
                    });


                }).catch(()=>{
                console.error(response);
            });


        } else {

            this.setState({
                isLoaded: true,
                data: this.props.movieReducer.movieDetail
            });
        }




    };



    render() {
        console.log("DETT", this.props)
        const { isLoaded, data } = this.state;

        if (!this.state.data) {
            return <div />
        }


            return (<div className="details">
                <div className="back" onClick={this.goBack}>

                </div>
                <div className="poster">
                    <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path} className="movieCard" />
                </div>
                <div className="info">
                    <h2>{data.title}</h2>
                    <span>"{data.overview}"</span>
                </div>
            </div>)










    }
}


const mapStateToProps = (state, ownProps) => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    //addMovieDetail: () => dispatch(addMovieDetail())
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Details));