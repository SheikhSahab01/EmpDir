import React from "react";
import { useState } from "react";
import "./dashboard.scss";
import Card from "../Cards/Card"
import data from '../../Backend/Data';

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
  return (
    <>
      <div className="d-flex p-0 w-100">
        <aside className={dashHide}>
          <header className="d-flex align-items-center">
            <img src="assets/images/logo.svg" />
            <div>
              {" "}
              <i
                className={`fa-solid fa-${open}`}
                onClick={handleDashToggle}
              ></i>
            </div>
          </header>
          <nav className="side-navigation">
            <ul>
              <li className="active">
                <a href="#">
                  <i className="fa fa-dashboard"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-ship"></i> <span>Create Employee</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <div className="content-area">
        <nav className="dash-navbar">
          <div className="search-bar d-flex justify-content-between">
            <input type="search" name="" id="" placeholder="Search Employee Name, Role, Department" value={searchVal} onChange={handlesearchvalue}/>
            <div className="user-details d-flex align-items-center">
              <img src="https://simplify.keka.com/files/6565bb03-dd21-4f5a-b023-a91042229dda/200x200/profileimage/9f91e30721604c0f818e2af4530b7cf7.jpg?1692777600000" alt="" className="user-img"/>
              <span className="user-name ms-3">Arjit Raturi</span>
            </div>
          </div>
        </nav>
        <main>
        <div className="card-wrapper overflow-hidden">
          <div className="row">
            {  searchVal !== '' ?
                empData.map(item =>{
                  if(item.name.toLowerCase().indexOf(searchVal.toLowerCase()) != -1 
                     ||
                     item.role.toLowerCase().indexOf(searchVal.toLowerCase()) != -1
                     ||
                     item.department.toLowerCase().indexOf(searchVal.toLowerCase()) != -1){    
                      return(
                        <div className="col-lg-4 p-0 d-flex justify-content-center">
                      <Card empsdata = {item}/>
                      </div>
                      )
                  }
                })
                :
                  empData.map((emp, i)=> { i++;
                    return(
                      <div className="col-lg-4 p-0 d-flex justify-content-center">
                      <Card empsdata = {emp}/>
                      </div>)
                    }
                  )
                }
          </div>
        </div>
          

        </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
