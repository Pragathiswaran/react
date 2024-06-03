const addTodoList = ({addLists,tasks,setTasks})=>{
return(
    <>
        <form onSubmit={(e)=>{addLists(e)}}>
      <input type='text' 
          placeholder='Add a task' 
          value={tasks} 
          onChange={(e)=>{setTasks(e.target.value)}}/>
      <button type='submit'>Add</button>
      </form>
    </>
)
}

export default addTodoList;