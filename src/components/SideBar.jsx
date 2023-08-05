import "../css/SideBar.css";
import sidebarImg from "../assets/images/bg-sidebar-desktop.svg";

function SideBar({ stepCounter }) {
  return (
    <div className="sidebar position-relative">
      <img src={sidebarImg} alt="sidebar" />
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
              stepCounter === 4 ? "activeStep" : ""
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
