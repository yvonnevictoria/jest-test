import React, { Component } from 'react'
import './App.scss';

class ToDoItems extends Component {
    createTasks = item => {
        return (
            <li key={item.key} onClick={() => this.props.delete(item.key)}>
                {item.text}
            </li>
        )
    }

    render() {
        const toDoEntries = this.props.entries
        const listItems = toDoEntries.map(this.createTasks)

        return <ul className="list">{listItems}</ul>
    }
}

export default ToDoItems
