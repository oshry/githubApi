import React from "react";
import PropTypes from "prop-types";
import Li from "../container/LiContainer.jsx";

const ResultsList = ({ list }) => (
    <div className="my-list">
        <ul>
            {list.map((item, key) => {
                    return <Li
                        key={key}
                        item={item.login}
                    />

            })
            }
        </ul>

    </div>
);
ResultsList.propTypes = {
    list: PropTypes.array,
};
export default ResultsList;