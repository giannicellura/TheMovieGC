import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../lib/api";
import { connect } from 'react-redux';
import {Link,withRouter} from "react-router-dom";

import { addMovieDetail,removeMovieDetail, movieList } from '../actions/movieAction';
import { movieGenres,selectedGenre } from '../actions/genreAction';

 class MovieList extends Component {

     constructor(props) {
         super(props);
         this.addMovieDetail.bind(this, props)
         this.selectedGenre.bind(this)
         this.movieGenres.bind(this, props)
         this.movieList.bind(this, props)
     }
     state = {
         loading: false,
         totalResults: null,
         totalPages: null,
         movieList: [],
         results: [],
         movieGenres: []
     };

     addMovieDetail = (movieDetail) => {
         //console.log("DETTAGLIO PRIMA DI CHIAMARE ACTION",movieDetail);
         return this.props.addMovieDetail(movieDetail);
     }

     movieList = (movies) => {
         //console.log("DETTAGLIO PRIMA DI CHIAMARE ACTION",movieDetail);
         return this.props.movieList(movies);
     }

     removeMovieDetail = () => {
         return this.props.removeMovieDetail();
     }

     selectedGenre = (event) => {
         //console.log("SELECTED", event.target.value)
         let selId = event.target.value;
         selId ? this.updateView(selId) : this.getMovieList()

         return this.props.selectedGenre(selId);
     }

     movieGenres = (genres) => {
         return this.props.movieGenres(genres);
     }

     updateView(genreId) {
         let results = this.state.movieList;

         let filteredResults;
         filteredResults = results.filter(
             (element) => {
                return (element['genre_ids'].indexOf(+genreId) > -1)
         })

         this.setState({
             results: filteredResults
         });

     }


     getMovieList = () => {
         api.getMovieList()
             .then((response) => {
                 //console.log("RESP",response.data.results);

                 if (this.state.loading) return;

                 const { total_results, total_pages, results } = response.data;

                 this.setState({
                     loading: false,
                     totalResults: total_results,
                     totalPages: total_pages,
                     movieList: results,
                     results: results
                 });

                 this.movieList(results);


            }).catch((response)=>{
             console.error(response);
         });

     };

     getGenres = () => {
         api.getGenres()
             .then((response) => {
                 //console.log("RESP",response);

                 if (this.state.loading) return;

                 this.setState({
                     loading: false,
                     movieGenres: response.data.genres
                 });

                 this.movieGenres(response.data.genres)


             }).catch((data)=>{
             console.error(data);
         });


     };

     componentDidMount () {
         this.getMovieList();
         this.getGenres();
     }
     componentWillMount () {
        this.removeMovieDetail()
     }

      render() {

        //console.log("ML",this.props, this.state)
        const { totalResults, totalPages, results, loading } = this.state;

        return (


          <div className="movieList">
              <h1>TheMovieDb Directory!</h1>
              <div className="filterByGenre">
                  <span>
                      <label for="filter">> Filter by Genres</label>
                      <select name="filter" className="movieGenres" value={this.state.value} onChange={this.selectedGenre}>
                          <option value=""></option>
                          {this.state.movieGenres.map(movieGenres => (
                              <option key={movieGenres.id} value={movieGenres.id}>{movieGenres.name}</option>
                          ))}
                      </select>
                  </span>
              </div>

            <ul>
              {this.state.results.map(results => (
                <li key={results.id}>
                  <Link to={`/Movie/${ results.id }`} onClick={this.addMovieDetail.bind(this, results)} >
                    <img src={"https://image.tmdb.org/t/p/w500" + results.poster_path} className="movieCard" />
                      <h2>{results.title}</h2>
                      <span>"{results.overview}"</span>
                      <span className="more">See more...</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        );
      }
}


const mapStateToProps = state => ({
    ...state.movieList

})

const mapDispatchToProps = dispatch => ({
    addMovieDetail: (movieDetail) => dispatch(addMovieDetail(movieDetail)),
    removeMovieDetail: () => dispatch(removeMovieDetail()),
    selectedGenre: (genreId) => dispatch(selectedGenre(genreId)),
    movieGenres: (genres) => dispatch(movieGenres(genres)),
    movieList: (movies) => dispatch(movieList(movies))
})


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(MovieList));
