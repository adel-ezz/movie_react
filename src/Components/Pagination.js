import React from "react";
import { Pagination } from "react-bootstrap";
import ReactPaginate from "react-paginate";

export const PaginationComponent = ({ getPage,pageCount }) => {
    const handlePageClick = (data) => {
        console.log(data.selected + 1)
        getPage(data.selected + 1)
    }

  return (
    <div className="py-3">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابق"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};
