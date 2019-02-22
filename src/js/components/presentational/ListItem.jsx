import React from "react";
import PropTypes from "prop-types";
const ListItem = ({ text}) => (
    <li className="li-item">
        {text}
    </li>
);
ListItem.propTypes = {
    text: PropTypes.string.isRequired,
};
export default ListItem;