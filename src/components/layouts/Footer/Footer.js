import React from 'react';
import "./Footer.css";
import Pagination from "../../pagination/Pagination"

const Footer = ({currentPage, totalPages, onPageChange}) => {

  return (
    <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
        
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
        {/* <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">Previous</button> */}
        {/* <button className="w3-button w3-black w3-padding-large w3-margin-bottom">Next »</button> */}
        
        <p>Powered by Stackup</p>
    </footer>
  )
}

export default Footer