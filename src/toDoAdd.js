import React from 'react';
import './App.scss';

const ToDoAdd = ({ add, inputElement, handleInput, ...currentItem}) => (
    <div className="toDoAdd">
        <div className="add-item">
            <form onSubmit={add}>
                <input
                    placeholder="Task"
                    ref={inputElement}
                    value={currentItem.text}
                    onChange={handleInput}
                />
                <button type="submit"> Add Task </button>
            </form>
        </div>
    </div>
);

export { ToDoAdd };
