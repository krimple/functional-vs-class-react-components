import { useReducer } from "react";
import { v4 } from 'uuid';
const initialState = {
    tasks: []
};

function reducer(state, action) {
    switch(action.type) {
        case 'add':
            return { tasks: [...state.tasks, action.payload ] };
        case 'remove':
            return { tasks: state.tasks.filter(t => t.id !== action.payload )};
    }
}

const TodoListManager = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const taskList = state.tasks.map(t => (
        <tr>
            <td>{ t.id }</td>
            <td><button onClick={() => dispatch({ type: 'remove', payload: t.id })}>Remove</button></td>
        </tr>
    ))
    return (
        <>
          <h1>Task Manager with <code>useReducer</code></h1>
          <table>
              { taskList }
          </table>
          <button onClick={() => dispatch({ type: 'add', payload: { id: v4() }})}>Add</button>
        </>

    )
}

export default TodoListManager;