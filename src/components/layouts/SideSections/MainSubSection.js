import React from "react";
import BlogSub from "./BlogSub/BlogSub";
import PopularPost from "./PopularPost/PopularPost";
import BlogTag from './BlogTags/BlogTag';

const MainSubSection = () => {
  return (
    <>
      <BlogSub />
      <PopularPost />
      <BlogTag />
    </>
  );
};

export default MainSubSection;
