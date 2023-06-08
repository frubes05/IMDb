import Image from "next/image";
import React from "react";

const API_KEY = process.env.API_KEY;

const Movie = async ({ params }) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    next: {
      revalidate: 10000,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }

  const movie = await res.json();

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
      <Image
          width={500}
          height={300}
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          className="rounded-lg"
          style={{ maxWidth: "100%", height: "100%"}}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="no image"
        />
        <div className="p-2">
            <h2 className="text-lg mb-3 font-bold">{movie.original_title}</h2>
            <p className="text-lg mb-3">
                <span className="font-semibold mr-1">Overview:</span>
                {movie.overview}
            </p>
            <p className="mb-3"><span className="font-semibold mr-1">Date Released:</span>{movie.release_date}</p>
            <p className="mb-3"><span className="font-semibold mr-1">Rating:</span>{movie.vote_count}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
