import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
function App() {
  const [data,setData]=useState([])
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res=>setData(res.data))
      .catch((err)=>console.log(err));
  },[])
  
  return (
    <div className="App">
      <h1>{data.map((e)=>(
              <ul>
                <li>{e.name}</li>
              </ul>
            )

            )}</h1>
    </div>
  );
}

export default App;
