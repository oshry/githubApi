import React, { Component } from "react";
const axios = require('axios');
import Input from "../presentational/Input.jsx";
import Results from "../presentational/ResultsList.jsx";
class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            // this is where the data goes
            list: [],
            current: ""
        };
    }
    buildResults = (github) => {
        this.setState(({list, current }) => ({
            list: [
                {
                    github
                }
            ],
            current: ''
        }));

    }
    searchGithub = (q) => {
        axios.get(`https://api.github.com/search/users?q=${q}`)
            .then(response => response.data.items)
            .then(
                response => {
                    const github = response;
                    this.buildResults(github);
                }
            )
            .catch(function (error) {
                // handle error
                console.log('error');
                console.log(error);
            })
    };

    handleChange = event => {
        console.log('yeahh');
        this.setState({ [event.target.id]: event.target.value });
    }

    handleKeyPress = e => {
        if (e.target.value !== '') {
            if (e.key === 'Enter') {
                e.preventDefault();
                console.log('submit');
                this.searchGithub(e.target.value);
            }
        }
    };
    render() {
        const { current } = this.state;
        return (
            <form id="article-form">
                <Input
                    type="text"
                    id="current"
                    value={current}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress}
                />
                <Results
                    list={this.state.list}
                />
            </form>
        );
    }
}
export default SearchContainer;