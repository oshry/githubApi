import React from "react";
import PropTypes from "prop-types";
import List from "../container/ListContainer.jsx";
const Git = ({ label, text, type, id, list, value, handleChange, handleKeyPress, handleSort }) => (
    <div className="form-group">
        <input
            type={type}
            className="form-control"
            id={id}
            value={value}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
        />

        <div className="my-list">
            <div className="login" onClick={handleSort.bind(this, 'up')}>up</div>
            <div className="login" onClick={handleSort.bind(this, 'down')}>down</div>
            <ul>
                <List
                    list={list}
                />
            </ul>

        </div>
    </div>
);
Git.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    list: PropTypes.array,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func,
    handleSort: PropTypes.func,
};
export default Git;