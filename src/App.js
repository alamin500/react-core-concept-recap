import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Mycomponent brand="Apple" price="5000"></Mycomponent>
      <Mycomponent brand="Microsoft" price="10000"></Mycomponent>
      <Mycomponent brand="Google" price="0"></Mycomponent>
      <Mycomponent></Mycomponent>
      <LoadUsers></LoadUsers>
    </div>
  );
}

function LoadUsers(){
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>setUsers(data))
  }, [])
  return(
    <div>
      <h1>Users Loaded {users.length}</h1>
      {
        users.map(user => <User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div className="user">
      <h2>Name: {props.name} </h2>
      <p>Call me {props.phone}</p>
    </div>
  )
}

function Mycomponent(props){
  const [points, setPoints] = useState(1)
  const myStyle ={
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '20px',
    padding: '10px',
    borderRadius: '10px'
  }
  const handleAddPoints = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
  }
  return(
    <div style={myStyle}>
      <h1>Yo yo mama.{props.brand}, I hava points:{points}</h1>
      <h4>Asking money {props.price}</h4>
      <button onClick={handleAddPoints}>Add Points</button>
      <p style={{ color: 'red', fontWeight: 'bold'}}>I can write my own conponent</p>
    </div>
  )
}
export default App;
