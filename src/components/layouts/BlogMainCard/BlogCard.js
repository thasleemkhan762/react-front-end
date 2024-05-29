import React, { useState } from "react";
import "./BlogCard.css";
import ReactTimeAgo from "react-time-ago";

const BlogCard = (blog) => {
  const [showFullDescription, setshowFullDescription] = useState({});

  const toggleDescription = (id) => {
    setshowFullDescription((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isValidDate = (date) => {
    return !isNaN(Date.parse(date));
  };

  return (
    <>
      <div className="w3-col l12 s12">
        <div
          className="w3-card-4 w3-margin w3-white preview-ht"
          id={`blog${blog._id}`}
        >
          <img
            className="img-woods"
            src={blog.image || "/backk.jpg"}
            alt={`Blog-${blog._id}`}
          ></img>
          <div className="w3-container">
            <h3>
              <b>{blog.heading || "Title"}</b>
            </h3>
            <h5>
              {blog.title || "Sub Title "},{" "}
              <span className="w3-opacity">
                {isValidDate(blog.createdAt) ? (
                  <ReactTimeAgo
                    date={new Date(blog.createdAt)}
                    locale="en-US"
                  />
                ) : (
                  "DD/MM/YYYY"
                )}
              </span>
            </h5>
          </div>

          <div className="w3-container">
            <p className="desc-marg">
              {showFullDescription[blog._id]
                ? blog.description
                : blog.description && blog.description.length > 150
                ? blog.description.slice(0, 150) + "..."
                : blog.description || "Description..."}
            </p>
            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p className="readmore-btn">
                  {blog.description && blog.description.length > 150 && (
                    <button
                      className="read_btn w3-button w3-padding-large w3-white w3-border"
                      onClick={() => toggleDescription(blog._id)}
                    >
                      {showFullDescription[blog._id] ? (
                        <>
                          &#8592; READ LESS
                          <span className="material-symbols-outlined"></span>
                        </>
                      ) : (
                        <>
                          READ MORE &#8594;
                          <span className="material-symbols-outlined"></span>
                        </>
                      )}
                    </button>
                  )}
                </p>
              </div>
              <div className="w3-col m4 w3-hide-small">
                <p>
                  <span className="w3-padding-large w3-right">
                    <b>Comments  </b> <span className="w3-tag">0</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
