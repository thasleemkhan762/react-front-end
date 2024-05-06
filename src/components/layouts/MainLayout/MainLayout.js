import React, {useState, useEffect} from "react";
import Header from "../../common/Header";
import BlogCard from "../BlogMainCard/BlogCard";
import MainSubSection from "../SideSections/MainSubSection";
import Footer from "../Footer/Footer";
import blogData from "../BlogMainCard/data/blogData";

const MainLayout = () => {
  const blogsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [popular, setPopular] = useState([]);
  const [firstLoad, setFirstLoad] = useState(true); // State to track first load


  useEffect(() => {
    setBlogs(blogData);
    const popularBlogs = blogData.slice().reverse().slice(0, 4);
    setPopular(popularBlogs);

    // Set firstLoad to false after initial data load
    setFirstLoad(false);
  }, []);

  useEffect(() => {
    // Scroll to top on page change, but only if not first load or reload
    if (!firstLoad && window.scrollY > 0) {
      window.scrollTo({ top: 182, behavior: 'smooth' });
    }
  }, [currentPage, firstLoad]);
  

  const  indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }
  return (
    <>
      <Header />
      <div className="w3-row">
          <div className="w3-col l8">
          <BlogCard blogs={currentBlogs} />
          </div>

          <div className="w3-col l4">
            <MainSubSection popularBlogs={popular} />
          </div>
      </div>
      <Footer currentPage={currentPage} totalPages={Math.ceil(blogs.length / blogsPerPage)} onPageChange={handlePageChange}/>
    </>
  );
};

export default MainLayout;
