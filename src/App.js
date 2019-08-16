import React from 'react';
import Nav from './components/Nav';
import Form from './components/Formik/SignUpForm';
// import Main from './pages/main';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Form />
    </div>
  );
}

export default App;
