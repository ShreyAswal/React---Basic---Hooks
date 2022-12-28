import React, { useState, useEffect } from 'react'
import {  useContext } from 'react'
import '../App.css'


import { ToggleTheme } from "../App";

function UseContext(){
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  const [num,updatenum] = useState(0) 

  const [para,updatedpara] = useState("")


  // function counter () { 
  //   num = 
  // }
  const alertt = () => {
    alert('You just pressed the Context Button')
  }

  const paragraph = () => {
    if(para===''){
    updatedpara("This is made by a Kalvian")
    }
    else{
      updatedpara('')
    }
  }

  const combine = () => {
    alertt();
    paragraph()
  }

  return(
    <div style={themeStyle} className='flex'>
      <h1>{para}</h1>
      <button className='contentButton' onClick={combine}>Content</button>
      <h1>{num}</h1>
      <button onClick={() => updatenum(num + 1)}>Increment</button>
    </div>
  )
}

export default UseContext;

// import React from 'react'
// import { useState, useEffect, useContext } from 'react'



// function UseState(){
//     const [currAge,setAge] = useState(18);
    
//     const handleAge = ()=>{
//       setAge(currAge+1);
//     }
  
//     return (
//       <div>
//         <h3>My Current Age is {currAge}</h3>
//         <button onClick={handleAge}>Get Older</button>
//       </div>
//     );
//   }

//   export default UseState;

// function UseState(){
//     const [currAge,setAge] = useState(19);
//     const [currSib, setSib] = useState(1);

    
//     function handleAge(){
//       setAge(currAge+1);
//     }
  
//     const handleSib = ()=>{
//       setSib(currSib+1);
//     }
  
  
//     return (
//       <div>
//         <h3>My Current Age is {currAge}</h3>
//         <h4>My siblings {currSib}</h4>
  
//         <button onClick={handleAge}>Get Older</button>
//         <button onClick={handleSib}>Get more Sib</button>
//         <h2>Age : {currAge} , Siblings : {currSib}</h2>
//       </div>
//     );
//   }
  
//   export default UseState;
  

// function UseState(){

//   const [state, setState] = useState({age:19, siblings:3});

//   const handleState = (val)=>{
  
//     setState({
//       // ...state,[val]:state[val]+1
//       ...state,[val]: state[val]+1
//     })
//   }

//   const {age,siblings} = state;

//   return(
//     <div>
//       <h3>My Current Age is {age}</h3>
//       <h4>My siblings {siblings}</h4>
//       <button onClick={()=>{handleState("age")}}>age</button>
//       <button onClick={()=>{handleState("siblings")}}>sib</button>
//       <h1>Age : {state.age} & Siblings : {state.siblings}</h1>
//     </div>
//   )
  
// }
// export default UseState

// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }

// export default UseState

// import { useEffect } from "react";

// function UseState(){

//   const [currAge, setAge] = useState(19);
//   const [currSib, setSib] = useState(3);

//   useEffect(()=>{
//     alert(`something changed ${currAge}`)
//   },[currAge])

//   return(
//     <div>
//       <h3>My Current Age is {currAge}</h3>
//       <h4>My siblings {currSib}</h4>

//       <button onClick={()=>setAge(currAge=>currAge+1)}>age</button>
//       <button onClick={()=>setSib(currSib=>currSib+1)}>sib</button>
//     </div>
//   )

// }


// export default UseState;
