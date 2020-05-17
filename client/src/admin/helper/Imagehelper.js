import React from "react";
import { API } from "../../backend";

const Imagehelper = ({ blog }) => {
  const imageurl = blog
    ? `${API}/blog/photo/${blog._id}`
    : "https://cdn.pixabay.com/photo/2020/04/03/07/26/eye-4997724_960_720.png";
  return (
    <div className="rounded border-border-success p-2">
      <img src={imageurl} alt="Blog image" style={{ maxWidth: "70px" }} />
    </div>
  );
};

export default Imagehelper;
