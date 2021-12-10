import { StateInspector, useState, useReducer } from "reinspect";
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
    const taskList = state.tasks.map((task) => (
        <tr key={task.id}>
            <td>{ task.id }</td>
            <td><button onClick={() => dispatch({ type: 'remove', payload: task.id })}>Remove</button></td>
        </tr>
    ))
    return (
        <>
          <StateInspector name="taskManager">
            <h1>Task Manager with <code>useReducer</code></h1>
            <table>
                <tbody>
                    { taskList }
                </tbody>
            </table>
            <button onClick={() => dispatch({ type: 'add', payload: { id: v4() }})}>Add</button>
          </StateInspector>
         </>
    )
}

export default TodoListManager;