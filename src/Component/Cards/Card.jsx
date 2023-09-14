import React from "react";
import "./card.scss";

function Card(Props) { 
    console.log(Props.empsdata);
    return (
      <div id={"caidid" + Props.empsdata.id} className="custom-card">
          <div className="image-wrappers">
              <img className="img-fluid" src={Props.empsdata.img}
                  alt="avtar_image" />
          </div>
          <div className="details-wrappers">
              <div className="main-details-1"></div>
              <div className="main-details-2">
                  <p className="name text-truncate">{Props.empsdata.name}</p>
                  <p className="job-title">{Props.empsdata.role}</p>
              </div>
          </div>
          <div className="secondary-details">
              <div className="row">
                  <p className="detail"><span>Department : </span>{Props.empsdata.department}</p>
              </div>
              <div className="row">
                  <p className="detail"><span>Location : </span> {Props.empsdata.location}</p>
              </div>
              <div className="row">
                  <p className="detail"><span>Email : </span>{Props.empsdata.email}</p>
              </div>
              <div className="row">
                  <p className="detail"><span>Mobile : </span> +91 {Props.empsdata.mobile}</p>
              </div>
          </div>
      </div>
    );
  }
  
  export default Card;
  