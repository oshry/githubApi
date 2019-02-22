import React, {Component} from 'react';
import ListField from "../presentational/ResultsList.jsx";

class List extends Component {
    render() {
        return (
                <ListField
                    list={this.props.list}
                />
        );
    }
}

export default List;