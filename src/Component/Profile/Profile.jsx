import React,{useState,useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./profile.scss"

const Profile = (Props) => {
  const {userId} = useParams();
  
  let navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const getUserData = async ()=>{
    try{
      const response = await fetch("http://localhost:5000/api/getuser",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({emp_id: Props.UserId ? Props.UserId : userId})
      });

      const resUserData = await response.json();
      setUserData(resUserData);
      // console.log(UserData)
    }
    catch(error){
      console.log(error);
    }
  }

  const handleEdit = ()=>{
    setEditMode(true)
  }

  const handleSave = ()=>{
    setEditMode(false)
  }

  useEffect(()=>{
    if(localStorage.getItem('token') && localStorage.getItem('UserId')){
      getUserData()
    }
    else{
      navigate("/")
    }
  },[]);

  return (
    <>
        <div className="profile-wrapper">
            <div className="profile-bg p-4 d-flex align-items-end">
              <h1>Simplify EMS</h1>
              <span>We build success</span>
            </div>
            <div className="profile px-4 py-2">
              <div className="profile-img">
                <img className='img-fluid' src={userData.img} alt="" />
              </div>
              <div className="profile-detail ps-4">
                  <div className="p-row d-flex align-items-start justify-content-between">
                    <div className='d-flex align-items-start gap-3'>
                      <div>
                        <h4 className='mb-0'>{userData.name}</h4>
                        <span className='d-block'>{userData.role}</span>
                      </div>
                      <div className="d-flex gap-2 h-100 p-2">
                        <span class="badge badge-danger">Leave</span>
                        <span class="badge badge-success">In</span>
                        <span class="badge badge-secondary">Not In Yet</span>

                      </div>
                    </div>
                    <div className="social-profile d-flex gap-3 p-2">
                        <small>{userData.email}</small>
                        <div className='d-flex gap-2 align-items-center justify-content-end'>
                        <a href=""><i className='fa-brands fa-linkedin'></i></a>
                        <a href=""><i className='fa-brands fa-github'></i></a>
                        </div>

                    </div>
                  </div>
              </div>
            </div>
            <div className="other-profile-details px-4 py-4 border-top w-100">
              <div className="row gy-3">
                <div className="col-lg-3 p-card">
                  <span>Job Title</span>
                  <p>{userData.role}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>{userData.department}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>REPORTING TO</span>
                  <p>Mohd. Asif Sheikh</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>EMP NO</span>
                  <p>{`EMS-${userData.emp_id}`}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>Mobile No</span>
                  <p>{userData.mobile}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>Location</span>
                  <p>{userData.location}</p>
                </div>
              </div>
            </div>
            <div class="profile-tabs-wrapper pb-2 my-2">
            <Tabs>
              <TabList>
                <Tab>About</Tab>
                <Tab>Profile</Tab>
                <Tab>Job</Tab>
                <Tab>Documents</Tab>
                <Tab>Assets</Tab>
              </TabList>

              <TabPanel>
                <div className="tab-content-wrapper">
                  <div className="ems-row">

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>About</h1>
                      </div>
                      <div className="ems-block-body">
                        <p>About Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Timeline</h1>
                      </div>
                      <div className="ems-block-body">
                        <p>Timeline Content</p>
                      </div>
                    </div>

                    <div className="ems-block">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Professional Summary</h1>
                      </div>
                      <div className="ems-block-body">
                        <p>Professional Summary Content</p>
                      </div>
                    </div>

                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-content-wrapper">
                <div className='d-flex justify-content-end'>
                <div className={!editMode ? "btn btn-secondary edit-mode-btn" : "d-none"} onClick={handleEdit}><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                <div className={editMode ? "btn btn-success edit-mode-btn" : "d-none"} onClick={handleSave}><i class="fa-regular fa-square-check"></i>Save</div>
                </div>
                  <div className="ems-row mt-3">
                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Primary Details</h1>
                      </div>
                      <div className="ems-block-body">
                        <div className={!editMode ? "d-block" : "d-none"}>
                          <p>Name: <strong>{userData.name}</strong></p>
                          <p>Date Of Birth: <strong>12-8-2023</strong></p>
                          <p>Gender: <strong>Male</strong></p>
                          <p>Maritial Status: <strong>Single</strong></p>
                          <p>Blood Group: <strong>O+</strong></p>
                        </div>
                        <div className={editMode ? "d-block" : "d-none"}>
                          <p>Name: <input type="text" value={userData.name}/></p>
                          <p>Date Of Birth: <input type="text" value="12-8-2023"/></p>
                          <p>Gender: <input type="text" value="Male"/></p>
                          <p>Maritial Status: <input type="text" value="Single"/></p>
                          <p>Blood Group: <input type="text" value="O+"/></p>
                        </div>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Contact Details</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Contact Details Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Addresses</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Addresses Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Relations</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Relations Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Experience</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Experience Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Education</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Education Content</p>
                      </div>
                    </div>

                    <div className="ems-block">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Professional Summary</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Professional Summary Content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
              <div className="tab-content-wrapper">
                  <div className="ems-row">

                    <div className="ems-block">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Job Details</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Job Details Content</p>
                      </div>
                    </div>

                    <div className="ems-block">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Employee Time</h1>
                        
                      </div>
                      <div className="ems-block-body">
                        <p>Employee Time Content</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tab-content-wrapper">
                  <p>Document Details</p> 
                </div>
                
              </TabPanel>
              <TabPanel>
                <div className="tab-content-wrapper">
                  <p>Assets Details</p> 
                </div>
              </TabPanel>

            </Tabs>
            </div>

            
        </div>
    </>
  )
}

export default Profile