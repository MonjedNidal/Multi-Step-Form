import "../css/SideBar.css";
import DesktopSidebarImg from "../assets/images/bg-sidebar-desktop.svg";
import MobileSidebarImg from "../assets/images/bg-sidebar-mobile.svg";
import { useEffect, useState } from "react";

function SideBar({ stepCounter }) {
  // State variable to store the page width
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  // Function to update the page width on window resize
  const handleResize = () => {
    setPageWidth(window.innerWidth);
  };

  // Add a resize event listener when the component mounts
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="sidebar position-relative">
      <img
        src={pageWidth < 700 ? MobileSidebarImg : DesktopSidebarImg}
        alt="sidebar"
      />
      <div className="stepsColumn position-absolute top-0 start-0 mx-4 my-4">
        <div className="d-flex flex-row align-items-center my-3">
          <h4
            className={`stepNumber col-3 ${
              stepCounter === 1 ? "activeStep" : ""
            }`}
          >
            1
          </h4>
          <div className="stepText col">
            <p>Step 1 </p>
            <h5>Your info</h5>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center my-3">
          <h4
            className={`stepNumber col-3 ${
              stepCounter === 2 ? "activeStep" : ""
            }`}
          >
            2
          </h4>
          <div className="stepText col">
            <p>Step 2 </p>
            <h5>Select plan </h5>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center my-3">
          <h4
            className={`stepNumber col-3 ${
              stepCounter === 3 ? "activeStep" : ""
            }`}
          >
            3
          </h4>
          <div className="stepText col">
            <p>Step 3 </p>
            <h5>Add-ons </h5>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center my-3">
          <h4
            className={`stepNumber col-3 ${
              stepCounter === 4 || stepCounter === 5 ? "activeStep" : ""
            }`}
          >
            4
          </h4>
          <div className="stepText col">
            <p>Step 4 </p>
            <h5>Summary</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
