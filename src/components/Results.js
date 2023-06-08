import React from "react";
import Card from "./Card";

const Results = ({ results }) => {
  return (
    <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4">
      {results?.map((result, i) => (
        <Card key={result.id} result={result} />
      ))}
    </ul>
  );
};

export default Results;
