import React from 'react'
import "./profile.scss"

const Profile = () => {
  return (
    <>
        <div className="profile-wrapper">
            <div className="profile-bg p-4 d-flex align-items-end">
              <h1>Simplify EMS</h1>
              <span>We build success</span>
            </div>
            <div className="profile px-4 py-2">
              <div className="profile-img">
                <img className='img-fluid' src="https://simplify.keka.com/files/6565bb03-dd21-4f5a-b023-a91042229dda/200x200/profileimage/9f91e30721604c0f818e2af4530b7cf7.jpg?1692777600000" alt="" />
              </div>
              <div className="profile-detail ps-4">
                  <div className="p-row d-flex align-items-start justify-content-between">
                    <div className='d-flex align-items-start gap-3'>
                      <div>
                        <h3 className='mb-0'>Arjit Raturi</h3>
                        <span className='d-block'>Design Intern</span>
                      </div>
                      <div className="d-flex gap-2 h-100 p-2">
                        <span class="badge badge-danger">Leave</span>
                        <span class="badge badge-success">In</span>
                        <span class="badge badge-secondary">Not In Yet</span>

                      </div>
                    </div>
                    <div className="social-profile d-flex gap-3 p-2">
                        <small>arjit.raturi@simplify.com</small>
                        <div className='d-flex gap-2 align-items-center justify-content-end'>
                        <a href=""><i className='fa-brands fa-linkedin'></i></a>
                        <a href=""><i className='fa-brands fa-github'></i></a>
                        </div>

                    </div>
                  </div>
              </div>
            </div>
            <div className="other-profile-details px-4 py-2 border-top w-100">
              <div className="row gy-3">
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>User Experience</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>User Experience</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>User Experience</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>User Experience</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>User Experience</p>
                </div>
                <div className="col-lg-3 p-card">
                  <span>department</span>
                  <p>User Experience</p>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Profile