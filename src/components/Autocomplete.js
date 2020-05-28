import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../lib/api";
import {Link} from "react-router-dom";

export class Autocomplete extends Component {
    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };
    static defaultProperty = {
        suggestions: []
    };
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            showSuggestions: false,
            userInput: "",
            results: []
        };


        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    getInfo = () => {
        api.getSearch(this.state.userInput)
            .then(({ data }) => {

                let obj = data.results;
                let resultArr = data.results.map((movie) => {
                    return {id: movie.id,title: movie.title};
                });
                //console.log("THEN",resultArr)
                this.setState({
                    results: resultArr
                });
            }).catch((data)=>{
            console.error(data);
        });
    };

    onChange = e => {
        const { suggestions } = this.props;

        this.setState({
            userInput: e.currentTarget.value
        }, () => {
            if (this.state.userInput && this.state.userInput.length > 1) {
                //if (this.state.userInput.length % 2 === 0) {
                //console.log(this.state.userInput)
                    this.getInfo();
                //}
            }
        });

        const userInput = e.currentTarget.value;
        const results = this.state.results
        /*const filteredSuggestions = this.state.results.filter(
            suggestion =>
            suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
*/
        this.setState({
            activeSuggestion: 0,
            results,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            results: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };
    onKeyDown = e => {
        const { activeSuggestion, results } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: results[activeSuggestion]
            });
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === results.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        //console.log("wrapper", this.wrapperRef)
        //console.log("event", event.target)
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                activeSuggestion: 0,
                results: [],
                showSuggestions: false,
                userInput: ''
            });
        }
    }


    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                results,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {

            if (results.length) {
                suggestionsListComponent = (
                    <ul id="searchResults" ref={this.setWrapperRef}>

                        {results.map((suggestion, index) => {
                            let className;

                            if (index === activeSuggestion) {
                                className = "";
                            }

                            return (
                                <li className="autocompList" key={suggestion.id} onClick={onClick} >
                                    <Link to={`/Movie/${ suggestion.id }`}>
                                        {suggestion.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <ul id="searchResults">
                        <li>No suggestions</li>
                    </ul>
                );
            }
        }

        return (
            <React.Fragment>
                <input
                    type="search"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </React.Fragment>
        );
    }
}

export default Autocomplete;
