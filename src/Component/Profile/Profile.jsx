import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./profile.scss"

const Profile = (Props) => {
  return (
    <>
        <div className="profile-wrapper">
            <div className="profile-bg p-4 d-flex align-items-end">
              <h1>Simplify EMS</h1>
              <span>We build success</span>
            </div>
            <div className="profile px-4 py-2">
              <div className="profile-img">
                <img className='img-fluid' src={Props.UserData.img} alt="" />
              </div>
              <div className="profile-detail ps-4">
                  <div className="p-row d-flex align-items-start justify-content-between">
                    <div className='d-flex align-items-start gap-3'>
                      <div>
                        <h4 className='mb-0'>{Props.UserData.name}</h4>
                        <span className='d-block'>{Props.UserData.role}</span>
                      </div>
                      <div className="d-flex gap-2 h-100 p-2">
                        <span class="badge badge-danger">Leave</span>
                        <span class="badge badge-success">In</span>
                        <span class="badge badge-secondary">Not In Yet</span>

                      </div>
                    </div>
                    <div className="social-profile d-flex gap-3 p-2">
                        <small>{Props.UserData.email}</small>
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
                  <p>{Props.UserData.role}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>{Props.UserData.department}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>REPORTING TO</span>
                  <p>Mohd. Asif Sheikh</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>EMP NO</span>
                  <p>{`EMS-${Props.UserData.emp_id}`}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>Mobile No</span>
                  <p>{Props.UserData.mobile}</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>Location</span>
                  <p>{Props.UserData.location}</p>
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
                  <div className="ems-row">

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Primary Details</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                      </div>
                      <div className="ems-block-body">
                        <p>Primary Details Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Contact Details</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                      </div>
                      <div className="ems-block-body">
                        <p>Contact Details Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Addresses</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                      </div>
                      <div className="ems-block-body">
                        <p>Addresses Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Relations</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                      </div>
                      <div className="ems-block-body">
                        <p>Relations Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Experience</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                      </div>
                      <div className="ems-block-body">
                        <p>Experience Content</p>
                      </div>
                    </div>

                    <div className="ems-block-half">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Education</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                      </div>
                      <div className="ems-block-body">
                        <p>Education Content</p>
                      </div>
                    </div>

                    <div className="ems-block">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Professional Summary</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
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
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
                      </div>
                      <div className="ems-block-body">
                        <p>Job Details Content</p>
                      </div>
                    </div>

                    <div className="ems-block">
                      <div className="ems-block-header justify-content-between align-items-center">
                        <h1>Employee Time</h1>
                        <div className='btn btn-secondary ems-block-header-btn'><i class="fa-regular fa-pen-to-square"></i>Edit</div>
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