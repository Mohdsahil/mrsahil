const Blog = require("../models/blog");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.createBlog = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }
    const { title, body } = fields;
    if (!title) {
      return res.status(400).json({
        error: "Title fields should not be empty",
      });
    }
    if (!body) {
      return res.status(400).json({
        error: "body fields should not be empty",
      });
    }
    let blog = new Blog(fields);
    // handle file here
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "file is too large",
        });
      }
      blog.photo.data = fs.readFileSync(file.photo.path);
      blog.photo.contentType = file.photo.type;
    }
    console.log(blog);
    blog.save((err, blog) => {
      if (err) {
        res.status(400).json({
          error: "saving blog faild",
        });
      }
      res.json(blog);
    });
  });
};

exports.getBlogById = (req, res, next, id) => {
  Blog.findById(id).exec((err, blog) => {
    if (err) {
      return res.status(404).json({
        error: "blog not found",
      });
    }
    req.blog = blog;
    next();
  });
};

exports.getBlog = (req, res) => {
  req.blog.photo = undefined;
  return res.json(req.blog);
};

exports.photo = (req, res, next) => {
  if (req.blog.photo.data) {
    res.set("Content-Type", req.blog.photo.contentType);
    return res.send(req.blog.photo.data);
  }
  next();
};

exports.deleteBlog = (req, res) => {
  let blog = req.blog;
  blog.remove((err, deletedblog) => {
    if (err) {
      return res.status(400).json({
        error: "faild to delete the blog",
      });
    }
    res.json({
      message: "blog deleted successfully",
      deletedblog,
    });
  });
};

exports.updateBlog = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with imaage",
      });
    }

    let blog = req.blog;
    blog = _.extend(blog, fields);
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size  to big",
        });
      }
      blog.photo.data = fs.readFileSync(file.photo.path);
      blog.photo.contentType = file.photo.type;
    }

    blog.save((err, blog) => {
      if (err) {
        res.status(400).json({
          error: "Update Faild !!",
        });
      }
      res.json(blog);
    });
  });
};

exports.getAllBlogs = (req, res) => {
  Blog.find()
    .sort({ _id: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(404).json({
          error: "Blog  Not Found",
        });
      }
      res.json(blogs);
    });
};
