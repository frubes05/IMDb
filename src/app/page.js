import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(
    `https://api.themoviedb.org/3/${genre === "fetchTopRated" ? "movie/top_rated" : `trending/all/week`}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          `Bearer ${API_KEY}`,
      },
      next: {
        revalidate: 10000
      }
    }
  );

  if(!res.ok) {
    throw new Error('Failed to fetch data!')
  }

  const data = await res.json();
  
  const results = data.results;

  return <div>
    <Results results={results} />
  </div>;
}
