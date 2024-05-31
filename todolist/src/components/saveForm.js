import React from "react";

function saveList({addList,task,setTask}){
    return(
        <div>
            <form onSubmit={addList}>
            <input type='text' 
                placeholder='Add a task' 
                value={task} 
                onChange={(e)=>{setTask(e.target.value)}}/>
            <button type='button'>Add</button>
      </form>
        </div>
        
    );
}

export default saveList() 