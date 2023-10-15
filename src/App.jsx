import './App.scss';
import Login from './Component/Login/Login';
import Dashboard from './Component/Dashboard/dashboard';
import React, { ReactDOM } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './Component/Profile/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  Component={Login}/>
          <Route path="dashboard/*"  Component={Dashboard}/>
        </Routes>
      </BrowserRouter>
      {/* <Dashboard empsdata = {empData}/> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
