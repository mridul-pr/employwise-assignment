import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss"; // Import SCSS for styling

const Pagination = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      previousLabel={"← Previous"}
      nextLabel={"Next →"}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="pagination"
      activeClassName="active"
    />
  );
};

export default Pagination;
