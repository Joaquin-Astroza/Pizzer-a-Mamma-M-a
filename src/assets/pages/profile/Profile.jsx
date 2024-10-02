import React, { useContext, useEffect, useState } from "react";
import "./profile.css"
import { UserContext } from "../../context/UserContext";

export default function Profile() {
  
  const {logout, getProfile}= useContext(UserContext)
  const [userEmail, setUserEmail] = useState("");

  useEffect(()=> {
    const fetchProfile = async () => {
      const profileData = await getProfile(); 
      if (profileData){
        setUserEmail(profileData.email);
      }
    }
    fetchProfile();
  }, [getProfile]);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>Email: {userEmail}</p>
      <button className="boton" onClick={logout}>Logout</button>
    </div>
  );
}
