function editTodoList({editTodoListValue,setEditTodoListValue,updatedList}){
    return(
        <>
            <form onSubmit={(e)=>updatedList(e)}>
             <input type='text' 
             placeholder='Add a task' 
             value={editTodoListValue} 
             onChange={(e)=>{setEditTodoListValue(e.target.value)}}/>
             <button type='submit'>Save</button>
          </form>
        </>
    )
}

export default editTodoList;