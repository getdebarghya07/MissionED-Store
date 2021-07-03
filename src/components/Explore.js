import React from "react";
import "./Explore.css";
import { Link } from "react-router-dom";

// const STYLES = ["btn--primary", "btn--outline"];
// const SIZES = ["btn--medium", "btn--large"];

export const Explore = ({ children }) => {
  return (
    <Link to="/Explorecourses" className="btn---explore">
      <button className="btn-explore">{children}</button>
    </Link>
  );
};
