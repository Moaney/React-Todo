import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <form>
                <input placeholder='New To-Do' type='text' />
                <button>Add To-Do</button>
                <button>Clear Completed</button>
            </form>
        )
    }
}

export default TodoList;