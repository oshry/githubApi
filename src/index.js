import ReactDOM from "react-dom";
import React from "react";
import SearchContainer from "./js/components/container/SearchContainer.jsx";
import ResultsContainer from './js/components/container/ResultsContainer.jsx';

const search = document.getElementById("search");
const results = document.getElementById("results");

search ? ReactDOM.render(<SearchContainer />, search) : false;
results ? ReactDOM.render(<ResultsContainer />, results) : false;
