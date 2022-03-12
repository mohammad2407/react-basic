import React from "react"
import './App.css';
import {Counter} from "./components/counter.jsx"
import{Task} from "./components/todo.jsx"

function App() {
console.log("check working")
    return( <>
    <h1>Counter to count</h1>
    <Counter />
    <h1>Todo List</h1>
    <div><Task /></div>
    
    </>
    )
     
}

export default App;
