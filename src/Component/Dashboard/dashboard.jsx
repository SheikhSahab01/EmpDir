import React from "react";
import { useState } from "react";
import "./dashboard.scss";

const Dashboard = () => {
  const [dashShow, SetdashShow] = useState(false);
  const [dashHide, SetdashHide] = useState("");
  const [open, Setopen] = useState("xmark");

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
  return (
    <>
      <div className="container-xxl d-flex p-0">
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
              <li>
                <a href="#">
                  <i className="fa fa-dashboard"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="active">
                <a href="#">
                  <i className="fa fa-ship"></i> <span>Create Employee</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        <main></main>
      </div>
    </>
  );
};

export default Dashboard;
