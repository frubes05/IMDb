import React from "react";
import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

const Search = async ({ params }) => {
  const { searchTerm } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchTerm}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      next: {
        revalidate: 10000,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const results = await res.json();

  const movies = results.results;

  return (
    <div>
      {movies?.length === 0 && (
        <h1 className="text-center pt-6">No corresponding movies!</h1>
      )}
      {movies?.length > 0 && <Results results={movies} />}
    </div>
  );
};

export default Search;
