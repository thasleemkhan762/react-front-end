import React from "react";
import "./AdminForm.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import FormPreview from "../FormPreview/FormPreview";
import BlogCard from "../../layouts/BlogMainCard/BlogCard";
import "../FormPreview/FormPreview.css";

const AdminForm = () => {
  const { register, handleSubmit, setValue, watch, formState, reset } =
    useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:5000/api/blogs", data)
      .then((response) => {
        console.log("Successfully added: ", response.data);
        toast.success("Blog created successfully!");
      })
      .catch((error) => {
        console.log("An error occured: ", error);
        toast.error("Error creating blog. Please try again");
      });
  };

  const handleInputChange = (e) => {
    setValue(e.target.name, e.target.value);
  };

  const handleReset = () => {
    reset();
  };

  const formData = watch();
  console.log(formData);

  return (
    <div className="AdminForm">
      <div className="FormSection">
        <div className="heading">
          <h2 className="title-blog">Blog Post</h2>
        </div>
        <div className="formContainer">
          <form id="formSection" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="inputForm">
              <label htmlFor="">
                <h4>Image URL:</h4>
              </label>
              <input
                type="text"
                id="image"
                className="inputBox"
                placeholder="Paste image URL"
                onChange={handleInputChange}
                {...register("image", {
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png|jpg))/i,
                    message: "Invalid image format",
                  },
                  required: "Image URL is required",
                })}
              />
              <p className="error">{errors.image?.message}</p>
              <label htmlFor="title">
                <h4>Title:</h4>
              </label>
              <input
                type="text"
                id="title"
                className="inputBox"
                placeholder="Enter title"
                onChange={handleInputChange}
                {...register("heading", {
                  required: {
                    value: true,
                    message: "Title is required",
                  },
                })}
              />
              <p className="error">{errors.heading?.message}</p>
              <label htmlFor="subtitle">
                <h4>Sub Title:</h4>
              </label>
              <input
                type="text"
                id="subtitle"
                className="inputBox"
                placeholder="Enter sub title"
                onChange={handleInputChange}
                {...register("title", {
                  required: {
                    value: true,
                    message: "Sub Title is required",
                  },
                })}
              />
              <p className="error">{errors.title?.message}</p>
              <label htmlFor="description">
                <h4>Description:</h4>
              </label>
              <textarea
                id="description"
                className="textarea"
                placeholder="Enter description..."
                onChange={handleInputChange}
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is required",
                  },
                })}
              ></textarea>
              <p className="error">{errors.description?.message}</p>
            </div>
            <div className="buttons-submit">
              <button className="btn bttn" type="button" onClick={handleReset}>
                Reset
              </button>
              <button type="submit" className="btn bttn">
                Create Post
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="PreviewForm">
        <div className="heading">
          <h2 className="title-preview">Blog Preview</h2>
        </div>
        {/* <FormPreview formData={formData} /> */}
        <BlogCard
          key={formData._id}
          image={formData.image}
          heading={formData.heading}
          title={formData.title}
          createdAt={formData.createdAt}
          description={formData.description}
        />
      </div>
    </div>
  );
};

export default AdminForm;
