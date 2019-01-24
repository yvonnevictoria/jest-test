import React from 'react';

const ToDoList = () => (
    <div className="toDoList">
        <div className="header">
            <form>
                <input placeholder="Task" />
                <button type="submit"> Add Task </button>
            </form>
        </div>
    </div>
);

export { ToDoList };
