import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "green" };
  } else {
    return { color: "#fff" };
  }
};
const { token } = isAuthenticated();
// console.log(token);
const openNav = () => {
  document.getElementById("sideNav").style.width = "60%";
  document.getElementById("bdy").style.opacity = "0.6";
};

const closeNav = () => {
  document.getElementById("bdy").style.opacity = "1";
  document.getElementById("sideNav").style.width = "0%";
};

const Menu = ({ history }) => {
  const { user } = isAuthenticated();

  const logo = "</mrsahil>";
  return (
    <Fragment>
      <div className="top">
        <div className="opneBtn" onClick={openNav}>
          <span> </span>
        </div>
        <div className="logo text-white ml-auto mt-3 mr-4 display-4 ">
          <a href="/" className="text-white text-decoration-none">
            {logo}
          </a>
        </div>
      </div>

      <div id="sideNav" className="sideNavigation">
        <div to="#" className="close-btn" onClick={closeNav}></div>
        <h2 className="text-white mb-5 logo">
          <Link to="/">{logo}</Link>
        </h2>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        {isAuthenticated() && isAuthenticated().user.role == 1 && (
          <Fragment>
            <Link to="/admin/dashboard">Admin Dashboard</Link>
            <Link
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Logout
            </Link>
          </Fragment>
        )}
        {/* <ul className="nav nav-tabs bg-dark">
        <li className="nav-link">
          <Link className="nav-link" style={currentTab(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li className="nav-link">
          <Link
            className="nav-link"
            style={currentTab(history, "/about")}
            to="/about"
          >
            About
          </Link>
        </li>
        <li className="nav-link">
          <Link
            className="nav-link"
            style={currentTab(history, "/work")}
            to="/work"
          >
            Work
          </Link>
        </li>
        <li className="nav-link">
          <Link
            className="nav-link"
            style={currentTab(history, "/blog")}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li className="nav-link">
          <Link
            className="nav-link"
            style={currentTab(history, "/contact")}
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul> */}
      </div>
    </Fragment>
  );
};

export default withRouter(Menu);
