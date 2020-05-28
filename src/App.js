import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import MovieList from "./components/MovieList";
import Details from "./components/Details";
import AdvSearch from "./components/AdvSearch";


class App extends Component {


    render() {
        var browserHistory;

        return (

            <div className="app">
                <Header />

                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route path="/about" component={About}/>
                    <Route exact path='/Movie/:id'
                     render={({ props }) => <Details {...props} />}
                     />
                    <Route path="/advSearch" component={AdvSearch}/>
                </Switch>

                <Footer />

            </div>



        );
    }
}


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

