import {React, useState} from 'react';
import SaveForm from './components/saveForm.js';
// import editForm from './components/editForm';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [editTodoList, setEditToDoList] = useState(false);
  const [editTodoListValue, setEditTodoListValue] = useState('');
  const [editTodoListIndex,setEditTodoListIndex] = useState('');

  const addList = (e)=>{
    e.preventDefault();
    todolist.push(task);
    setTodolist([...todolist]);
    setTask('');
  }

  const deleteList = (index)=>{
    todolist.splice(index, 1);
    setTodolist([...todolist]);
    // console.log(index)
  }

  const editList =(index, item)=>{
    // console.log(index, item)
    setEditTodoListValue(item);
    setEditTodoListIndex(index);
    setEditToDoList(true)
  }

  const updatedList = (e)=>{
    e.preventDefault();
    // console.log(editTodoListValue)
    todolist.splice(editTodoListIndex,1,editTodoListValue)
    setEditToDoList(false)
  }
  return (
    <>
    <div className=''>
      <h1>Todo List</h1>
      {!editTodoList &&
      <SaveForm 
      addList={addList}
       task={task}
       setTask={setTask}
      />
    }
    {editTodoList &&
      <form onClick={()=>updatedList}>
        <input type='text' 
          placeholder='Add a task' 
          value={editTodoListValue} 
          onChange={(e)=>{setEditTodoListValue(e.target.value)}}/>
        <button type='button'>Save</button>
      </form>
    }
      <ul>
        {
          todolist.map((item, index)=>{
            // console.log(index)
            return(

              <li key={index}>
                <input type='checkbox'/>
                {item}
                <button onClick={()=>{editList(index,item)}}>edit</button>
                <button onClick={()=>{deleteList(index)}}>del</button>
              </li>
            )
          }
          )
        }
      </ul>
    </div>
    
    </>
  );
}

export default App;
