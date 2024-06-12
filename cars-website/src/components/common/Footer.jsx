import React from "react";
import "../../styles/Footer.css";

export const Footer = () => {
  let date = new Date();
  let currentYear = date.getFullYear();

  return <div className="footer-container">{`© ${currentYear}`}</div>;
};
