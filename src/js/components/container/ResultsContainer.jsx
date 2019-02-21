import React, {Component} from 'react';
import ToDoList from "../presentational/ToDoList.jsx";

class ResultsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    };

    createNewToDoItem = () => {
        this.setState(({ list, todo }) => ({
            list: [
                ...list,
                {
                    todo
                }
            ],
            todo: ''
        }));
    };


    handleKeyPress = e => {
        if (e.target.value !== '') {
            // console.log('e.target.value');
            // console.log(e.target.value);
            if (e.key === 'Enter') {
                this.createNewToDoItem();
            }
        }
    };

    handleInput = e => {
        this.setState({
            todo: e.target.value
        });
    };


    // this is now being emitted back to the parent from the child component
    deleteItem = indexToDelete => {
        this.setState(({ list }) => ({
            list: list.filter((toDo, index) => index !== indexToDelete)
        }));
    };

    render() {
        return (
            <div className="ToDoItem">
                <ToDoList
                    list={this.state.list}
                    todo={this.state.todo}
                    handleDelete={this.deleteItem}
                    createNewToDoItem={this.createNewToDoItem}
                    handleKeyPress={this.handleKeyPress}
                    handleInput={this.handleInput}
                />
            </div>
        );
    }
}

export default ResultsContainer;