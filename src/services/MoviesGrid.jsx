import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

import "./MoviesGrid.css";
import getMovies from "./fecth.jsx";

export default function MoviesGrid({ patch }) {
  // eslint-disable-next-line
  const [location, setLocation] = useLocation();
  const [movies, setMovies] = useState({ loading: true, data: null });
  const Patch = patch;
  const [url, seturl] = useState(
    `https://api.themoviedb.org/3/${Patch}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  const [config, setConfig] = useState({ loading: true, data: null });
  useEffect(() => {
    seturl(
      `https://api.themoviedb.org/3/${Patch}&api_key=${process.env.REACT_APP_API_KEY}`
    );
  }, [Patch]);
  useEffect(() => {
    getMovies(url).then((movie) => setMovies({ loading: false, data: movie }));
    getMovies(
      `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((configuration) =>
      setConfig({ loading: false, data: configuration.images })
    );
  }, [url]);

  return (
    <div className="movies-container-grid" id="grid">
      {movies.loading ? (
        <>
          <p>Cargando</p>
        </>
      ) : (
        movies.data.results.map((movie) => (
          <div key={movie.id}>
            {config.loading ? (
              <p>Cargando</p>
            ) : (
              <img
                onClick={() => setLocation(`/movie/${movie.id}`)}
                src={`${config.data.base_url}${config.data.poster_sizes[3]}${movie.poster_path}`}
                alt={movie.title}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}
