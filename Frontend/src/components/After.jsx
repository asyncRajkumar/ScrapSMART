import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const After = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log(token);

    if (token) {
        localStorage.setItem("jwtToken", token); 
          navigate("/"); 
    }
}, []);

  return (
    <div>Ready Au</div>

  )
}

export default After