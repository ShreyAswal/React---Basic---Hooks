
import React,{ useState } from 'react';
import './App.css';
import UseContext from './component/UseContext';

export const ToggleTheme = React.createContext()

function App() {

  const [state,setState] = useState(true)

  const handleToggle = ()=>{
    setState(state=>!state)
  }

  return (
    <ToggleTheme.Provider value={state} >
      <button id='toggle' onClick={handleToggle}>Toggle</button>
      <UseContext/>
    </ToggleTheme.Provider>
  );
}

export default App;

// import { UseState } from 'react';
// import './App.css';
// import UseState from './component/UseState';

// function App() {
//   return (
//     <div className="App">
//       <UseState/>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import UseContext from './components/UseContext';

// export const ToggleTheme = React.createContext()

// function App() {

//   const [state,setState] = useState(true)

//   const handleToggle = ()=>{
//     setState(state=>!state)
//   }

//   return (
//     <ToggleTheme.Provider value={state}>
//       <button onClick={handleToggle}>Toggle</button>
//       <UseContext/>
//     </ToggleTheme.Provider>
//   );
// }

// export default App;