import React, {Component} from 'react';
import Li from "../presentational/ListItem.jsx";

class ToDoItem extends Component {
    render() {
        return (
            <div className="ToDoItem">
                <Li
                    text={this.props.item}
                />
            </div>
        );
    }
}

export default ToDoItem;