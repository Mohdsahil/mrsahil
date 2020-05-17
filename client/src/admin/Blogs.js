import React, { useState, useEffect } from "react";
import DashLayout from "../core/DashLayout";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { getBlogs, deleteBlog } from "./helper/adminapicall";
import Imagehelper from "./helper/Imagehelper";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  const [isdeleted, setIsdeleted] = useState(false);

  const { user, token } = isAuthenticated();

  const loadAllBlogs = () => {
    getBlogs().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  const deleteThisBlog = (blogId) => {
    deleteBlog(blogId, user._id, token).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setIsdeleted(true);
        loadAllBlogs();
      }
    });
  };

  useEffect(() => {
    loadAllBlogs();
  }, []);

  const deleteMessage = () => {
    return (
      isdeleted && (
        <div className="alert alert-danger">Blog deleted successfully</div>
      )
    );
  };

  return (
    <DashLayout title="all Blog" description="Update and remove ">
      <div className="container">
        <div className="row">
          {deleteMessage()}
          <table className="table  text-light">
            <thead>
              <tr>
                <td>Thumbnail</td>
                <td>Title</td>
                <td>Description</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <Imagehelper blog={blog} />
                    </td>
                    <td>{blog.title}</td>
                    <td>{blog.body}</td>
                    <td>
                      <Link
                        className="btn btn-success"
                        to={`/admin/blogs/update/${blog._id}`}
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => deleteThisBlog(blog._id)}
                        className="btn btn-danger ml-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashLayout>
  );
};

export default Blogs;
