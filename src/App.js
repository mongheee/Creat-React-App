import { useEffect, useState } from "react";
/* 로딩메세지가 앱에 보이고  로딩이 끝나고 영화들을 보여준다. */
function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => getMovies(), []);
  console.log(movies);

  return (
    <div>
      <h1>Show Movie List</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie, index) => (
            <div key={index}>
              <img src={movie.medium_cover_image} />
              <h3>
                {movie.title} [{movie.year}] , {movie.rating}
              </h3>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map((genres) => (
                  <li key={genres}>{genres}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
