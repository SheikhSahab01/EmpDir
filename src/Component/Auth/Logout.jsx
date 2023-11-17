import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    let navigate = useNavigate();

    const LogoutUser = ()=>{
        localStorage.removeItem('userEmail');
        localStorage.removeItem('token');
        localStorage.removeItem('UserId');
        navigate("/")
    }

    useEffect(()=>{
      LogoutUser();
    },[])

    return(
        <>
        </>
    )
}

export default Logout