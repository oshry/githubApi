import React, { Component } from "react";
const axios = require('axios');
import Git from "../presentational/Git.jsx";

class GitContainer extends Component {
    constructor() {
        super();
        this.state = {
            // this is where the data goes
            list: [],
            current: ""
        };
    }
    buildResults = (github) => {
        console.log(github);
        this.setState(({list, current }) => ({
            list: github
            ,
            current: ''
        }));

    }
    compareLoginUp = (a,b) => {
        const A = a.login.toUpperCase();
        const B = b.login.toUpperCase();
        if(A < B) { return -1; }
        if(A > B) { return 1; }
        return 0;
    }
    compareLoginDown = (a,b) => {
        const A = a.login.toUpperCase();
        const B = b.login.toUpperCase();
        if(A > B) { return -1; }
        if(A < B) { return 1; }
        return 0;
    }
    sortField = (direction) => {
        let field = event.target.classList[0];
        let currentState = this.state.list;
        if(direction === 'up'){
            let sorted = currentState.sort(this.compareLoginUp);
            this.buildResults(sorted);
        }else{
            console.log('down');
            let sorted = currentState.sort(this.compareLoginDown);
            this.buildResults(sorted);
        }
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
        const { current, list } = this.state;
        return (
            <div id="github">
                <Git
                    type="text"
                    id="current"
                    list={list}
                    value={current}
                    handleChange={this.handleChange}
                    handleKeyPress={this.handleKeyPress}
                    handleSort = {this.sortField}
                />
            </div>
        );
    }
}
export default GitContainer;