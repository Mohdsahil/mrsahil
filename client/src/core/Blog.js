import React, { Fragment } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getBlogs } from "./helper/blogHelper";
import { useEffect } from "react";
import { API } from "../backend";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);
  const loadAllBlogs = () => {
    getBlogs().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  useEffect(() => {
    loadAllBlogs();
  }, []);

  const getImageUrl = (blog) => {
    return blog
      ? `${API}/blog/photo/${blog._id}`
      : "https://cdn.pixabay.com/photo/2020/04/03/07/26/eye-4997724_960_720.png";
  };

  const blogCard = (blog) => {
    return (
      <Fragment>
        <div className="col-md-6">
          <img src={getImageUrl(blog)} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="content mt-5">
            <h3>{blog.title}</h3>
            <small></small>
            <p>{blog.body}</p>
            <Link
              to={`/blog/${blog._id}`}
              className="btn btn-outline-light btn-lg float-right"
            >
              Read More
            </Link>
          </div>
        </div>
      </Fragment>
    );
  };

  return (
    <Layout title="My Blogs" description="latest blog">
      <div className="container ">
        <div className="row ">
          {blogs.map((blog, index) => {
            return (
              <div className="row mt-2 mb-2" key={index}>
                {blogCard(blog)}
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
