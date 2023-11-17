import './App.scss';
import Login from './Component/Auth/Login';
import Dashboard from './Component/Dashboard/dashboard';
import React, { ReactDOM } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './Component/Profile/Profile';
import Logout from './Component/Auth/Logout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"  Component={Login}/>
          <Route path="dashboard/*"  Component={Dashboard}/>
          <Route path="logout" Component={Logout}/>
        </Routes>
      </BrowserRouter>
      {/* <Dashboard empsdata = {empData}/> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
