import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Mycomponent brand="Apple" price="5000"></Mycomponent>
      <Mycomponent brand="Microsoft" price="10000"></Mycomponent>
      <Mycomponent brand="Google" price="0"></Mycomponent>
      <Mycomponent></Mycomponent>
    </div>
  );
}

function Mycomponent(props){
  console.log(props)
  const myStyle ={
    backgroundColor: 'lightblue',
    border: '3px solid blue',
    margin: '20px',
    padding: '10px'
  }
  return(
    <div style={myStyle}>
      <h1>Yo yo mama.{props.brand}</h1>
      <h4>Asking money {props.price}</h4>
      <p style={{ color: 'red', fontWeight: 'bold'}}>I can write my own conponent</p>
    </div>
  )
}
export default App;
