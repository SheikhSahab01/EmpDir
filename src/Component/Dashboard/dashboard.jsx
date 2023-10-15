import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./dashboard.scss";
import Card from "../Cards/Card"
import data from '../../Backend/Data';
import Createempform from "../Createempform/createempform";
import Profile from "../Profile/Profile";

const Dashboard = () => {
  var empData = data.employees;
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
      || item.mobile.toLowerCase().includes(searchVal.toLowerCase())
      || item.email.toLowerCase().includes(searchVal.toLowerCase());
  })
  : empData;

  return (
    <>
      <Tabs class="main-tabs">
        <div className="d-flex p-0 w-100">
          <aside className={dashHide}>
            <header className="d-flex align-items-center">
              <img src="assets/images/logo.svg" />
              <div>
                <i className={`fa-solid fa-${open}`} onClick={handleDashToggle}></i>
              </div>
            </header>
            <nav className="side-navigation">
              <TabList>
                <Tab>
                  <li>
                    <a href="#"><i className="fa fa-dashboard"></i><span>Dashboard</span></a>
                  </li>
                </Tab>
                <Tab>
                  <li>
                    <a href="#"> <i className="fa fa-ship"></i><span>Create Employee</span></a>
                  </li>
                </Tab>
                <Tab>
                  <li>
                    <a href="#"><i className="fa fa-dashboard"></i><span>Profile</span></a>
                  </li>
                </Tab>
              </TabList>
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
              <TabPanel>
                <div className="tabs-content-wrapper overflow-hidden">
                  <div className="row">
                    {searchResults.map((item, i) => (
                      <div className="col-lg-4 p-0 d-flex justify-content-center" key={i}>
                        <Card empsdata={item} />
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tabs-content-wrapper overflow-hidden">
                  <Createempform></Createempform>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tabs-content-wrapper overflow-hidden">
                  <Profile></Profile>
                </div>
              </TabPanel>
            </main>
          </div>
        </div>
      </Tabs>
    </>
  );
};

export default Dashboard;
