import React from "react";
import Menu from "./Menu";
import "../App.css";

const Layout = ({
  title = "",
  description = "",
  className = "text-white p-4",
  children,
  history,
}) => {
  return (
    <div>
      <Menu />
      <div id="bdy">
        <div className="container-fluid pt-5 mt-5 mb-5">
          <div className="pt-5 pb-5  text-white text-center">
            <h2 className="display-3">{title}</h2>
            <p className="lead">{description}</p>
          </div>
        </div>
        <div className={className}>{children}</div>
        <footer className="bg-dark mt-auto py-3">
          <div className="container-fluid text-white text-center py-4">
            <p>Author: Sahil</p>
            <small>&copy; Copyright 2020, mrsahil.com</small>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
