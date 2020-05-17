import { API } from "../../backend";
// GET all blogs
export const getBlogs = () => {
  return fetch(`${API}/blog`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get bloge by it's id
export const getBlogById = (blogId) => {
  return fetch(`${API}/blog/${blogId}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};

// create blog
export const createBlog = (userId, token, blog) => {
  return fetch(`${API}/blog/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// update the blog
export const updateBlog = (blogId, userId, token, blog) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: blog,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteBlog = (blogId, userId, token) => {
  return fetch(`${API}/blog/${blogId}/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
