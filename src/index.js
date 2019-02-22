import ReactDOM from "react-dom";
import React from "react";
import GitContainer from "./js/components/container/GitContainer.jsx";
// import ListItemContainer from './js/components/container/ListItemContainer.jsx';

const search = document.getElementById("search");
// const results = document.getElementById("results");

search ? ReactDOM.render(<GitContainer />, search) : false;
// results ? ReactDOM.render(<ListItemContainer />, results) : false;
