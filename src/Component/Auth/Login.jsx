import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.scss";

const Login = () => {
  let navigate = useNavigate();
  const [credentials,setCredentials] = useState({email: "",password: ""});

  const getUserId = (token)=> {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    var data = JSON.parse(window.atob(base64));
    return data.user.id;
  }

  const handleSubmit = async(e)=>{
      e.preventDefault();
      const response  = await fetch("http://localhost:5000/api/loginuser",{
       method: 'POST',
       headers: {
      "Content-Type": "application/json",
       },
       body: JSON.stringify({email: credentials.email, password: credentials.password})
      });
      const json = await response.json()

      if(json.success){
        localStorage.setItem('userEmail', credentials.email)
        localStorage.setItem('token', json.authToken)
        localStorage.setItem('UserId',getUserId(json.authToken));
        // console.log(localStorage.getItem('UserId'))
        navigate("/dashboard");
      }
      else{
        alert("Enter Valid Credentials")
      }
  }

  useEffect(()=>{
    if(localStorage.getItem('token') && localStorage.getItem('UserId')){
      navigate("dashboard");
    }
  },[]);

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]:e.target.value})
  }
  return (
    <div className="container">
    <div className="row justify-content-center mt-5">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="card shadow rounded">
          <div className="card-title text-center border-bottom">
            <h2 className="p-3">Login</h2>
          </div>
          <div className="card-body">
            <form method='POST'>
              <div className="mb-4">
                <label htmlFor="username" className="form-label">Username/Email</label>
                <input type="text" className="form-control" id="username" name="email" value={credentials.email} onChange={onChange}/>
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"  name="password" value={credentials.password}  onChange={onChange}/>
              </div>
              <div className="mb-4">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label htmlFor="remember" className="form-label ms-2">Remember Me</label>
              </div>
              <div className="d-grid">
                <button type="submit" className="login-btn" onClick={handleSubmit}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login