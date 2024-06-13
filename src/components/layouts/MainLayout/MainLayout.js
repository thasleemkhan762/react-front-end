import React, { useState, useEffect } from "react";
import Header from "../../common/Header";
import BlogCard from "../BlogMainCard/BlogCard";
import MainSubSection from "../SideSections/MainSubSection";
import Footer from "../Footer/Footer";
// import blogData from "../BlogMainCard/data/blogData";
import axios from "axios";

const MainLayout = () => {
  const blogsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    axios
      .get("https://react-backend-blog-o8xo.onrender.com/api/blogs")
      .then((response) => {
        console.log("data:", response.data);
        const blogs = response.data.slice().reverse();
        setBlogs(blogs);
        const popularBlogs = response.data.slice().reverse().slice(0, 4);
        setPopular(popularBlogs);
      })
      .catch((error) => {
        console.log("An error occurred:", error);
      });
  }, []);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header
        name={"MY BLOG"}
        title={"Welcome to the blog of "}
        admin={"Thasleem"}
      />
      <div className="w3-row">
        <div className="w3-col l8">
          {currentBlogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              image={blog.image}
              heading={blog.heading}
              title={blog.title}
              createdAt={blog.createdAt}
              description={blog.description}
            />
          ))}
        </div>

        <div className="w3-col l4">
          <MainSubSection popularBlogs={popular} />
        </div>
      </div>
      <Footer
        currentPage={currentPage}
        totalPages={Math.ceil(blogs.length / blogsPerPage)}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default MainLayout;
