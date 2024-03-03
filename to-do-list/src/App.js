import React, {useState} from 'react';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [Todos, setTodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault();

    setTodos((currentTodos) => {
     return [...currentTodos,{id: crypto.randomUUID(), title: newItem, complete: false} ]
    });
    setNewItem("");
  }

  function toggleTodo(id, checked){
    setTodos((currentTodos) => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, complete: checked}
        }
        return todo;
      })
    })
  }

  function deleteTods(id){
    setTodos((currentTodos) => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
  <>
    <div className="App">
      <div className='container'>
      <h1>My To Do List</h1>
      <form onSubmit={handleSubmit} className='add-item'>
        <input type="text" value={newItem} onChange={e=>setNewItem(e.target.value)}/>
        <button>Add</button>
      </form>
     <h1>Todo list</h1>
      <ul className='listItem'>
      {Todos.length === 0 ? "No Todo List" : ""} 
        {Todos.map(todo =>{
          return <li key={todo.id}>
          <label>
              <input type="checkbox" checked={todo.complete}
              onChange={e => toggleTodo(todo.id,e.target.checked)} />
              {todo.title}
              <button onClick={()=> deleteTods(todo.id)}>delete</button>
            </label>
        </li>
        })}
      </ul>
    </div>
    </div>
  </>
    
  );
}

export default App;
