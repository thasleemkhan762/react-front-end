import React from "react";
import './FormPreview.css';
import BlogCard from "../../layouts/BlogMainCard/BlogCard";


const FormPreview = ({ formData = {} }) => {
    console.log(formData);
    // const { image, heading, description, title } = formData;
    // const [ showFullDescription, setShowFullDescription ] = useState(false);

    // const shortDesc = description ? description.slice(0, 250) : "";
    // const displayDesc = showFullDescription ? description : shortDesc;
    // const buttonText = showFullDescription ? "Read Less «" : "Read More »";

    // const toggleDesc = () => {
    //     setShowFullDescription(!showFullDescription)
    // }

    return (
      // <div className="prev-section">
      //     <div className="prev-content">
      //         <>
      //         <img className="Blog_image" src={image || '/backk.jpg'} alt="Img preview" />
      //         </>
      //         <div className="Blog_contant">
      //             <h3 id="post-title">{ heading || "Post Title" }</h3>
      //             <h5 id="post-subtitle">{ title || "Post Subtitle" }</h5>
      //         </div>
      //         <div className='Preview_content'>
      //             <p id="post-description">{ displayDesc || "Post Description..." }</p>
      //             {description && description.length > 250 && (
      //                 <button className="read_btn" onClick={toggleDesc}>
      //                     {buttonText}
      //                 </button>
      //             )}
      //         </div>
      //     </div>
      // </div>

    //   <div className="w3-col l12 s12">
    //     <div className="w3-card-4 w3-margin w3-white" id={`blog`}>
    //       <img
    //         className="img-woods"
    //         src={image || "/backk.jpg"}
    //         alt={`Blog`}
    //       ></img>
    //       <div className="w3-container">
    //         {/* <h3>
    //           <b>{blog.heading}</b>
    //         </h3> */}
    //         <h5>
    //           <h3 id="post-title">{heading || "Post Title"}</h3>
    //           <h5 id="post-subtitle">{ title || "Post Subtitle" }</h5>
    //           {/* <span className="w3-opacity"><ReactTimeAgo date={new Date(blog.createdAt)}  locale="en-US" /></span> */}
    //         </h5>
    //       </div>

    //       <div className="w3-container Preview_content">
            
    //         <p id="post-description">{displayDesc || "Post Description..."}</p>
    //         <div className="w3-row">
    //           <div className="w3-col m8 s12">
    //             <p className="readmore-btn">
    //               {description && description.length > 250 && (
    //                 <button className="read_btn" onClick={toggleDesc}>
    //                   {buttonText}
    //                 </button>
    //               )}
    //             </p>
    //           </div>
    //           <div className="w3-col m4 w3-hide-small">
    //             <p>
    //               <span className="w3-padding-large w3-right">
    //                 <b>Comments  </b> <span className="w3-tag">0</span>
    //               </span>
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    <BlogCard  blog={formData} /> 
    );
}

export default FormPreview;