import React, { Component } from 'react';
import './App.scss';
import { ToDoAdd } from './toDoAdd.js';
import ToDoItems from './toDoItems.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            currentItem: {text:'', key:''},
        }
    }

    handleInput = e => {
        const itemText = e.target.value
        const currentItem = { text: itemText, key: Date.now() }
        this.setState({
            currentItem,
        })
    }

    add = e => {
        e.preventDefault()
        const newItem = this.state.currentItem;
        if (newItem.text !== '') {
            console.log(newItem)
            const items = [...this.state.items, newItem]
            this.setState({
                items: items,
                currentItem: { text: '', key: '' },
            })
        }
    }

    delete = key => {
        const filteredItems = this.state.items.filter(item => {
            return item.key !== key
        })
        this.setState({
            items: filteredItems
        })
    }

    render() {
        return (
            <div className="body">
                <div className="title">
                    <h3>To Do List</h3>
                </div>
                <ToDoAdd
                    add={this.add}
                    inputElement={this.inputElement}
                    handleInput={this.handleInput}
                    currentItem={this.state.currentItem}
                />
                <ToDoItems entries={this.state.items} delete={this.delete}/>
            </div>
        );
    }
}

export default App;
