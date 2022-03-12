import React from "react";

const Task = () => {
    const [query, setQuery] = React.useState("");
    const[tasks,setTasks]   = React.useState([])
    const handleChange = (e) =>{
        console.log(e.target.value)
        const value = e.target.value;
        setQuery(value);
    }

    
    const addTodo = () =>{
        const payload = {
            title:query,
            status : false
        }

        let newTasks = [...tasks, payload];
        setTasks(newTasks)
    }
    console.log(tasks)

    return (
    <div>

    <div>
    <input value = {query} onChange = {handleChange} placeholder = "type something"/>
    <button onClick={addTodo}>Add</button>
    </div>

    <div>
       {
            tasks.map((item) =>{
                return <div>{item.title}</div>
            })
       }
    </div>
    </div>
    
   
    )

    



}
export {Task} 