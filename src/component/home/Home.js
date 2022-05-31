import React from "react";
import HomeDrawer from './HomeDrawer';
import { useNavigate } from "react-router-dom";

const MainHome = ({ page }) => {
  const navigate = useNavigate();

  const navigatePage = (text) => {
    console.log(text)
    if (text === "Patients") {
      navigate("/patient");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div>
      <HomeDrawer
        page={page}
        navigatePage={navigatePage}
      />

    </div>
  )
}

export default MainHome;