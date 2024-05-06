import React, { useState } from "react";
import "./BlogCard.css";

const BlogCard = ({blogs}) => {
  const [showFullDescription, setshowFullDescription] = useState({});

  const toggleDescription = (id) => {
    setshowFullDescription((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  

  return (
    <>
      {blogs.map((blog) => (
        <div className="w3-col l12 s12" key={blog.id}>
        <div className="w3-card-4 w3-margin w3-white" id={`blog${blog.id}`}>
          <img className="img-woods" src={blog.image}  alt={`Blog-${blog.id}`}></img>
          <div className="w3-container">
            <h3>
              <b>{blog.heading}</b>
            </h3>
            <h5>
              {blog.title},{" "}
              <span className="w3-opacity">April 7, 2014</span>
            </h5>
          </div>

          <div className="w3-container">
            <p>
              {showFullDescription[blog.id]
                  ? blog.description
                  : blog.description.length > 100
                    ? blog.description.slice(0, 150) + '...'
                    : blog.description}
            </p>
            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p className="readmore-btn">
                {blog.description.length > 250 && (
                  <button
                    className='read_btn w3-button w3-padding-large w3-white w3-border'
                    onClick={() => toggleDescription(blog.id)}>
                    {showFullDescription[blog.id] ? (
                      <>
                       &#8592; READ LESS 
                        <span className='material-symbols-outlined'>
                          
                        </span>
                      </>
                    ) : (
                      <>
                        READ MORE &#8594;
                        <span className='material-symbols-outlined'>
                         
                        </span>
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
      ))}
    </>
  );
};

export default BlogCard;
