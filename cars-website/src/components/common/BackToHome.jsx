import React from "react";
import { Link } from "react-router-dom";
import "../../styles/BackToHome.css";

export const BackToHome = () => {
  return (
    <div className="back-to-home">
      <Link to="/">Back to Home</Link>
    </div>
  );
};
