import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div>
      <div className="header"></div>
      {props.flag === 1 ? (
        <div className="content">
          <h1>Team Tracker</h1>
        </div>
      ) : (
        <div className="content">
          <img className="Image" src={props.team.strTeamLogo} alt="" />
        </div>
      )}
    </div>
  );
};

export default Header;
