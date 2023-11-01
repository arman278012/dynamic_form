import logo from './logo.svg';
import './App.css';
import DynamicForm from './Components/DynamicForm';
import DisplayData from './Components/DisplayData';
import { useContext } from 'react';
import { AppContext } from './Components/AuthContext';
import { Route, Router, Routes } from 'react-router-dom';

function App() {

  const { clicked } = useContext(AppContext)
  return (
    <div className="App">

   
            {
          clicked ? (<DisplayData />) : (<DynamicForm />)
            }
      



    </div>
  );
}

export default App;
