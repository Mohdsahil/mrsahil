const express = require("express");
const router = express.Router();

const {
  updateBlog,
  deleteBlog,
  getBlog,
  getBlogById,
  getAllBlogs,
  photo,
  createBlog,
} = require("../controllers/blog");

const {
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getUserById,
} = require("../controllers/auth");

router.param("userId", getUserById);
router.param("blogId", getBlogById);

// routes
router.post(
  "/blog/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createBlog
);
//********* */ read routes
router.get("/blog/:blogId", getBlog);
router.get("/blog/photo/:blogId", photo);

router.delete(
  "/blog/:blogId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteBlog
);

router.put(
  "/blog/:blogId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateBlog
);

// get all the product
router.get("/blog", getAllBlogs);

module.exports = router;
