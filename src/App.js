// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const[value,setValue] = useState('');
  const[todo,setTodo] = useState([]);

  const handleonClick = () => {
    if(value !== "" && todo !== ""){
      setTodo([...todo,value]);
      setValue('');
    }
  }

  const deleteTodo = (id) => {
    // console.log('first')
    setTodo((item) => {
      return item.filter((arr, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header/>
      <div>
        <input type="text" placeholder='Write Something...' onChange={(e)=>setValue(e.target.value)} value={value} />
        <button onClick={handleonClick}>Add</button>
      </div>
      <div>
        <ul>
          {
            todo.map((todos,index) => {
              return(
                <Todos key={index} id={index} text={todos} onSelect={deleteTodo}/>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default App;
