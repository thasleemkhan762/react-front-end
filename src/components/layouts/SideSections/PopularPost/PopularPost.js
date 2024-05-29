import React from "react";
import "./PopularPost.css";
import blogData from "../../BlogMainCard/data/blogData";

const PopularPost = () => {
  const scrollToBlog = (blogId) => {
    const blogElement = document.getElementById(blogId);
    if (blogElement) {
      blogElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="w3-card w3-margin mar-bott">
        <div className="w3-container w3-padding">
          <h4>Popular Posts</h4>
        </div>
        <ul className="w3-ul w3-hoverable w3-white">
          {blogData.map((value) => (
            <li
              className="w3-padding-16 popular-box"
              key={value.id}
              onClick={() => scrollToBlog(`blog${value.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={value.image}
                alt={`Blog-${value.id}`}
                className="w3-left w3-margin-right popular-image"
              ></img>
              <div className="popular-description">
                <span className="w3-large">{value.heading}</span>
                <span>{value.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PopularPost;
