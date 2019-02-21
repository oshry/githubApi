import React from "react";
import PropTypes from "prop-types";
import ToDoItem from "../container/SearchContainer.jsx";

const ResultsList = ({ list }) => (
    <div className="my-list">
        <ul>
            {list.map((item) => {
                return <li>{item.html_url}</li>
            })
            }
        </ul>

    </div>
);
ResultsList.propTypes = {
    list: PropTypes.array,
};
export default ResultsList;