import React from "react";
import PropTypes from "prop-types";
const Input = ({ label, text, type, id, value, handleChange, handleKeyPress }) => (
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
    </div>
);
Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func,
};
export default Input;