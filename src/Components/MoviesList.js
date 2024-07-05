import React from "react";
import { Row } from "react-bootstrap";
import { CardMovie } from "./CardMovie";
import { PaginationComponent } from "./Pagination";

export const MoviesList = ({movies,getPage,pageCount}) => {
  return (
    <Row>
      {movies.length > 0 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2>لا يوجد بيانات</h2>
      )}
      <PaginationComponent getPage={getPage} pageCount={pageCount} />
    </Row>
  );
};
