
import './App.css';
import {useMemo,useState} from "react"

//useMemon
function App() {
  const[m,Sm]=useState(0)
  const[f,Sf]=useState(0)
  let maleMemo=useMemo(()=> m*10,[m])
  return (

    <div className="App">
      <p>male:{m}</p>
      <p>female:{f}</p>
      <p>malememo:{maleMemo}</p>
    
     <button onClick={()=>Sm(m+1)}>m</button>
     <button onClick={()=>Sf(f+1)}>f</button>

    </div>
  );
}

export default App;
