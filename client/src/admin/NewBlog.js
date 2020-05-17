import React, { useEffect } from "react";
import DashLayout from "../core/DashLayout";
import { isAuthenticated } from "../auth/helper";
import { useState } from "react";
import { createBlog } from "./helper/adminapicall";
// import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const NewBlog = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    title: "",
    body: "",
    photo: "",
    loading: false,
    error: "",
    createdBlog: "",
    getRedirect: false,
    formData: "",
  });

  const {
    title,
    body,
    photo,
    loading,
    error,
    createdBlog,
    getRedirect,
    formData,
  } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handelChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;

    setValues({ ...values, [name]: value });
    formData.set(name, value);
  };

  const loadingMessage = () => {
    return loading && <div className="alert alert-info">Loading...</div>;
  };

  const successMessage = () => {
    return (
      createdBlog && (
        <div className="alert alert-success">
          {createdBlog} -> is created successfully
        </div>
      )
    );
  };
  const errorMessage = () => {
    return (
      error && (
        <div className="alert alert-danger">
          got and error to pulish: {error}
        </div>
      )
    );
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true });
    createBlog(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({
          title: "",
          body: "",
          photo: "",
          loading: false,
          createdBlog: data.title,
        });
      }
    });
  };

  const newBlogForm = () => {
    return (
      <form className="text-dark">
        <div className="form-group">
          <label htmlFor="photo">Thumbnail</label>
          <input
            type="file"
            onChange={handelChange("photo")}
            accept="image"
            placeholder="Thumbnail"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">title</label>
          <input
            type="text"
            onChange={handelChange("title")}
            value={title}
            placeholder="Bloge Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">description</label>
          <textarea
            name="body"
            id=""
            rows="15"
            className="form-control"
            placeholder="body"
            value={body}
            onChange={handelChange("body")}
          ></textarea>
          <p id="editor"> edito</p>
        </div>
        {/* <div className="form-group">
          <CKEditor
            editor={ClassicEditor}
            data={body}
            className="form-control"
            onInit={(editor) => {
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              setValues({ ...values, body: editor.getData() });
              formData.set("body", editor.getData());
            }}
          />
        </div> */}
        <button onClick={onSubmit} className="btn btn-info">
          Publish
        </button>
      </form>
    );
  };

  return (
    <DashLayout title="Add new Blog" description="Write your new blog">
      <div className="row">
        <div className="col-md-8 ml-auto mr-auto">
          {loadingMessage()}
          {successMessage()}
          {errorMessage()}
          {newBlogForm()}
        </div>
        <p className="text-white text-center">{JSON.stringify(values)}</p>
      </div>
    </DashLayout>
  );
};

export default NewBlog;
