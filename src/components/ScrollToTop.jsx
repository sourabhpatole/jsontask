import React, { useState } from "react";
import NavigationIcon from "@mui/icons-material/Navigation";
const ScrollToTop = () => {
  const [hide, setHide] = useState(true);
  const changeToTopVisiblity = () => {
    if (window.scrollY > 300) {
      setHide(false);
    } else {
      setHide(true);
    }
  };
  window.addEventListener("scroll", changeToTopVisiblity);
  return (
    <div style={{ display: hide ? "none" : "block" }}>
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          width: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          height: "60px",
          right: "40px",
        }}
      >
        <a href="#">
          <NavigationIcon style={{ color: "black", height: "30px" }} />
        </a>
      </div>
    </div>
  );
};

export default ScrollToTop;
