import React from "react";
import { Link } from "react-router-dom";
import "./GoToHome.css";

function GoToHome() {
  return (
    <Link to="/" className="gotohome">
      Home
    </Link>
  );
}

export default GoToHome;
