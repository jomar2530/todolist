import React, { useReducer, useState } from 'react';
import './App.css';

const todosReducer = (state, action) => { 
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload.id)
    default:
        return state;
  }
 };

function TodoList () {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [newTodo, setNewTodo] = useState('');
  const handleChange = event => setNewTodo(event.target.value);

  return(
    <div>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.label}<button onClick={()=> dispatch({type: 'DELETE_TODO',  payload: { id: todo.id }})}>Remove Todo</button></li>)}
      </ul>

      <div>
        <input value={newTodo} onChange={handleChange} type="Text"/>
        <button onClick={() => dispatch({type: 'ADD_TODO',  payload: { label: newTodo, id: Math.ceil(Math.random() * 100) }})}>Add Todo</button>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          TODOS
        </p>

        <TodoList />
      </header>
    </div>
  );
}

export default App;