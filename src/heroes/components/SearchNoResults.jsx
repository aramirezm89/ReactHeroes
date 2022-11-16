import React from "react";

export const SearchNoResults = ({ termino }) => {
  return (
    <div
      className="d-flex justify-content-center alert alert-danger text-center"
      role="alert"
    >
      <div>No existen heroes con el nombre: {termino}</div>
    </div>
  );
};
