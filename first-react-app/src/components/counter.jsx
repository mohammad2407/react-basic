// import React from "react";

// const Counter = () =>{
//     const [count,setCount] = React.useState(1);

//         function changeCount(val){
//             setCount(count+val)
//         }
//         console.log("value")
//     return (<>
//     <h3>Counter:{count}</h3>
//     <button onClick = {() =>changeCount(+1)} >Add</button>
//     <button onClick = {() =>changeCount(-1)} >Sub</button>
//     </>
//     )
// }
// export {Counter}


import React from "react";

function Counter(){

const [count,setCount] = React.useState(0);

function changeCount(val){
    setCount(count+val)
}


function doubleCount(val){
    setCount(count*val)
}

console.log(count)

    return (<>
    
        <h2>Counter:{count}</h2>
        <button onClick={()=>changeCount(1)}>Add</button>
        <button onClick={()=>changeCount(-1)}>remove</button>
        <button onClick={()=>doubleCount(2)}>Double</button>
        <button onClick={() =>doubleCount(0)}>Reset</button>
    </>
    )
}

export {Counter}    