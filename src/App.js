import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  // const items=["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"];
  //setitems used because to  change value in the our html code otherwise it wont render in our html code.The one more reason one value is stored in compiler but wont be reflected in html .
  const [items,setItems]=useState([
    "IPL",
    "books",
    "Netflix",
    "Amazon",
  ])
  const [value,setValue] = useState("");
  function onValueChange(e) {
   console.log(e.target.value);

   setValue(e.target.value);    
  }
  function onAdd() {
    console.log(value);
    const newItems=[... items,value]
    //items.push(value)--> here we cant update value on large
    setItems(newItems)
   setValue("")
  }
  return (
    <div className="App">
   <header className="App-header">
    <h1 className='nav'>ToDo List</h1>
    <input type="text" placeholder="Enter your task: " value={value} onChange={onValueChange}></input>
    <button onClick={onAdd}>Add here</button>
    <ol>
      {items.map((item,i)=>(
        
        <li  key={i} 
        >
          
          {item}</li>
      ))}
    </ol>
    <p>Hello World!</p>
   </header>
      
    </div>
  );
}

export default App;
