const listTodo = ({todolist,editList,deleteList})=>{
    return(
        <>
            {
            todolist.map((item, index)=>{
                return(
                <li key={index}>
                    <input type='checkbox'/>
                    {item}
                    <button onClick={()=>{editList(index,item)}}>edit</button>
                    <button onClick={()=>{deleteList(index)}}>del</button>
                </li>
                )
            })
            }
        </>
    )
}

export default listTodo;