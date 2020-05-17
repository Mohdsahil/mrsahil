import React from "react";
import DashLayout from "../core/DashLayout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeftSide = () => {
    return (
      <div className="card">
        <h4 className="card-header bg-dark text-white">Admin Navigation</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/admin/blogs/" className="nav-link text-info ">
              All Blogs
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/admin/create/blog" className="nav-link text-info ">
              New Blog
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  const adminRightSide = () => {
    return (
      <div className="card mb-4">
        <h4 className="card-header">Admin Info</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span>
            {name}
          </li>
          <li className="list-group-item">
            <span className="badge badge-success mr-2">Email:</span>
            {email}
          </li>
          <li className="list-group-item">
            <span className="badge badge-danger mr-2">Admin Area</span>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <DashLayout title="Admin Dashboard" description="mange your blogs here">
      <div className="row">
        <div className="col-md-3">{adminLeftSide()}</div>
        <div className="col-md-9 text-dark">{adminRightSide()}</div>
      </div>
    </DashLayout>
  );
};

export default AdminDashBoard;
