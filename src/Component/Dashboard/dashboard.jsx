import React, { useState,useEffect } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./dashboard.scss";
import Card from "../Cards/Card"
// import data from '../../Backend/Data';
import Createempform from "../Createempform/createempform";
import Gridlayout from "../Gridlayout/gridlayout";
import Profile from "../Profile/Profile";
import { Routes, Route, Link } from "react-router-dom";
import navigators from '../../Data/navigators.json';

const Dashboard = () => {
  // var empData = data.employees;
  const [empData, setEmpData] = useState([]);

const loadData = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/EmpData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    setEmpData(data[0]);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(()=>{
    loadData()
  },[]);

  const [dashShow, SetdashShow] = useState(false);
  const [dashHide, SetdashHide] = useState("");
  const [open, Setopen] = useState("xmark");
  const [searchVal, SetsearchVal] = useState('');

  const handleDashToggle = () => {
    if (!dashShow) {
      SetdashShow(true);
      SetdashHide("dash-hide");
      Setopen("bars");
    } else {
      SetdashShow(false);
      SetdashHide("");
      Setopen("xmark");
    }
  };

  const handlesearchvalue = (e)=>{
    SetsearchVal(e.target.value);
  }

  const searchResults = searchVal != ''
  ? empData.filter(item => {
    return item.name.toLowerCase().includes(searchVal.toLowerCase())
      || item.role.toLowerCase().includes(searchVal.toLowerCase())
      || item.department.toLowerCase().includes(searchVal.toLowerCase())
      || item.email.toLowerCase().includes(searchVal.toLowerCase());
  })
  : empData;

  const [itemActive, setItemActive] = useState(1);

  return (
    <>
        <div className="d-flex p-0 w-100">
          <aside className={dashHide}>
            <header className="d-flex align-items-center">
              {/* <img src="assets/images/logo.svg"/> */}
                <div className="logo">EMS</div>
              <div>
                <i className={`fa-solid fa-${open}`} onClick={handleDashToggle}></i>
              </div>
            </header>
            <nav className="side-navigation">
              {
                navigators.map((item,i) =>{
                  return(
                    <>
                       <li className={`${itemActive === item.id ? "active" : ""} mb-2`} onClick={() => setItemActive(item.id)} key={i}>
                       <Link to={item.path}><i className={item.icon}></i><span>{item.name}</span></Link>
                       </li>
                    </>
                  )
                })
              }
            </nav>
          </aside>
          <div className="content-area">
            <nav className="dash-navbar">
              <div className="search-bar d-flex justify-content-between">
                <input type="search" name="" id="" placeholder="Search Employee Name, Role, Department, Email, Mobile" value={searchVal} onChange={handlesearchvalue}/>
                <div className="user-details d-flex align-items-center">
                  <img src="https://simplify.keka.com/files/6565bb03-dd21-4f5a-b023-a91042229dda/200x200/profileimage/9f91e30721604c0f818e2af4530b7cf7.jpg?1692777600000" alt="" className="user-img"/>
                  <span className="user-name ms-3">Arjit Raturi</span>
                </div>
              </div>
            </nav>
            <main>
            <div className="tabs-content-wrapper overflow-hidden">
                <Routes>
                  <Route path="/" element={<Gridlayout />}/>
                  <Route path="/create_employee" element={<Createempform />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/employees" element={
                      <div className="row">
                      {searchResults.map((item, i) => (
                        <div className="col-lg-4 p-0 d-flex justify-content-center" key={i}>
                          <Card empsdata={item} />
                        </div>
                      ))}
                    </div>
                  } />
                </Routes>
              </div>  
            </main>
          </div>
        </div>
    </>
  );
};

export default Dashboard;
