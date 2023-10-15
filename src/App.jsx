import './App.scss';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/dashboard';
import data from './Backend/Data';
import React, { ReactDOM } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './Component/Profile/Profile';

function App() {
  var empData = data.employees;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  Component={Login}/>
          <Route path="dashboard"  Component={Dashboard}/>
          <Route path="dashboard/profile"  Component={Profile}/> 
        </Routes>
      </BrowserRouter>
      {/* <Dashboard empsdata = {empData}/> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
