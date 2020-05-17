import React, { Fragment } from "react";
import Layout from "./Layout";
import { useState } from "react";
import { useEffect } from "react";
import { getBlogById } from "../admin/helper/adminapicall";
import { API } from "../backend";

const SingleBlog = ({ match }) => {
  const [blog, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  const loadBlog = () => {
    getBlogById(match.params.blogId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  useEffect(() => {
    loadBlog();
  }, []);

  const getImageUrl = (blog) => {
    return blog
      ? `${API}/blog/photo/${blog._id}`
      : "https://cdn.pixabay.com/photo/2020/04/03/07/26/eye-4997724_960_720.png";
  };

  return (
    <Layout title={blog.title} description="By Sahil">
      <div className="container ">
        <div className="row ">
          <div className="col-md-10 ml-auto mr-auto">
            <div className="photo mb-3">
              <img src={getImageUrl(blog)} alt="" className="img-fluid" />
            </div>
            <div className="contend mb-3">
              <h2 className="text-white mb-3">{blog.title}</h2>
              <p>{blog.body}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleBlog;
