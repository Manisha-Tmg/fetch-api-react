import React from "react";
import "../Css/Home.css";
import { Link } from "react-icons/fi";

const Landingpage = () => {
  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Pratik Man Joshi</h2>
        <p className="description">
          Welcome to my scheduling page. Please follow the instructions to add
          an event to my calendar.
        </p>
        <hr />
        <div className="meeting-card">
          <div className="meeting-info">
            <Link to={"/home"}>
              <h3 className="meeting-title">Introduction</h3>
              <p className="meeting-duration">15 Min(s)</p>
              <p className="meeting-details">
                This is an introductory meeting link
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
