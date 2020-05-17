import { API } from "../../backend";

// / GET all blogs
export const getBlogs = () => {
  return fetch(`${API}/blog`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
