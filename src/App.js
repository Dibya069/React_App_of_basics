// import logo from './logo.svg';
import './App.css';
import Header from './myComponents/header.js';
import {Body} from './myComponents/Body.js';
import {MinBody} from './myComponents/minBody.js';
import {Foot} from './myComponents/foot.js';

function App() {

 

  let todos = [
    {
      n : 1,
      name : "Dibyajyoti Mohanty",
      Un : "Ravenshaw"
    },
    {
      n : 2,
      name : "Pritam Kumar raybabu",
      Un : "MPC Autonomas"
    },
    {
      n : 3,
      name : "Yashbant",
      Un : "Biology BBSR"
    }
  ]
  return (
    <>
      <Header />
      <Body term="Hello there , I am here..." t2="got it"/>
      <MinBody t={true}/>
      <Foot todos = {todos}/>   
    </>
  );
}

export default App;
