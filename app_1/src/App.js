
import React from "react";
import "./styles.css";

function Profile() {
  return (
    <img
      src="profile.jpeg"
      alt="Snehal Bhayani"
      className = "profile"
    />
  );
}

export default function Gallery() {
  return (
    <>
    <Profile />
    </>  
     
  );
}
