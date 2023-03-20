import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchMoviewHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // fetch("https://swapi.dev/api/films")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     const transformedData = data.results.map((movie) => {
    //       return {
    //         id: movie.episode_id,
    //         title: movie.title,
    //         openingText: movie.opening_crawl,
    //         releaseDate: movie.release_date,
    //       };
    //     });
    //     setMovies(transformedData);
    //   });

    // use async to replicate the same behaviour as above

    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
        throw new Error(
          "Something went wrong - " +
            response.error +
            " Error code: " +
            response.status
        );
      }
      const data = await response.json();

      const transformedData = data.results.map((movie) => {
        return {
          id: movie.episode_id,
          title: movie.title,
          openingText: movie.opening_crawl,
          releaseDate: movie.release_date,
        };
      });
      setMovies(transformedData);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }, []);

  // as fetchMoviewHandler has side efferct we can use useEffect,
  // in React functions are object reference and their state gets changed everytime they re-render
  // we use empty [] as dependency so this methid will execute only once while loading first time
  // but we use the function as dependency incase it's using any external state to omit any possible bug
  // but as here it doesnt use any external state so the state of the function will change everytime it's re-render
  // and out method will be in infinite loop, so we can use useCallback to prevent this.
  useEffect(() => {
    fetchMoviewHandler();
  }, [fetchMoviewHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviewHandler}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && !error && movies.length === 0 && <p>No movies found!</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
