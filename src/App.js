import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React, { Component } from 'react'
import HomePage from './Pages/homepage';

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          {/* <Route path="/dashboard/tests/n-back-test" exact component={NbackTest}/>
          <Route path="/dashboard/tests/digit-test" exact component={DDigitTest}/>
          <Route path="/dashboard" component={Dashboard}/> */}
        </Routes>
      </Router>
    )
}
export default App
