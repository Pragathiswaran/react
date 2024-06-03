import {React, useState} from 'react';
import SaveForm from './components/addTodoList';
import EditForm from './components/editTodoList';
import ListTodo from './components/listTodo';
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
  }

  const editList =(index, item)=>{
    setEditTodoListValue(item);
    setEditTodoListIndex(index);
    setEditToDoList(true)
  }

  const updatedList = (e)=>{
    e.preventDefault();
    todolist.splice(editTodoListIndex,1,editTodoListValue)
    setEditToDoList(false)
  }
  return (
    <>
    <div class='flex justify-center'>
      <h1 class=''>Todo List</h1>
      {!editTodoList &&
        <SaveForm addLists={addList} tasks={task} setTasks={setTask}/>
      }
      {editTodoList &&
        <EditForm updatedList={updatedList} editTodoListValue={editTodoListValue} setEditTodoListValue={setEditTodoListValue}
        />
      }
      <ul>
        <ListTodo todolist={todolist} editList={editList} deleteList={deleteList}/>
      </ul>
    </div>
    
    </>
  );
}

export default App;
