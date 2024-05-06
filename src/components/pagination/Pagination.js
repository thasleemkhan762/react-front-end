import React from "react";

const Pagination = ({currentPage, totalPages, onPageChange}) => {
    const prevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const  nextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className='footer-btn'>
          
          <button className={`btn ${currentPage === 1 ? "disabled" : ''}`} onClick={prevPage}>Previous</button>
          <button className={`btn ${currentPage === totalPages ? "disabled" : ''}`} onClick={nextPage}>Next »</button>
        </div>
    )
}

export default Pagination;