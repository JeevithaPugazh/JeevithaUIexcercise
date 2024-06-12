import React, { useEffect, useState } from "react";
import "../../styles/Pagination.css";
import "../../styles/Button.css";
export const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(props.totalDatalength / itemsPerPage));
    setCurrentPage(0);
  }, [props.totalDatalength, itemsPerPage]);

  useEffect(() => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    props.setViewDetails([startIndex, endIndex]);
  }, [currentPage, itemsPerPage]);

  const handlePageNumber = (event) => {
    setCurrentPage(Number(event.target.value));
  };

  const handleItemsPerPage = (event) => {
    setItemsPerPage(Number(event.target.value));
  };

  return (
    <div className="pagination-container">
      <select
        className="select-itemsPerPage"
        value={itemsPerPage}
        onChange={handleItemsPerPage}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>

      <div className="page-count">
        <button
          disabled={currentPage === 1}
          className="btn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
        <select
          className="select-page"
          value={currentPage}
          onChange={handlePageNumber}
        >
          {Array.from({ length: totalPages }, (dummy, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <button
          disabled={currentPage === totalPages}
          className="btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
