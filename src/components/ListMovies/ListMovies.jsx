import React, { useState } from "react";
import "../../css/ListMovies.css";
import MoviesGrid from "../../services/MoviesGrid.jsx";
export default function ListMovies() {
  const [count, setCount] = useState(1);
  return (
    <>
      <div>
        <div className="movies-container">
          <div className="movies-container-title">
            <div className="movies-container-lines">
              <div className="blue"></div>
              <div className="red"></div>
            </div>
            <h2>Movies</h2>
          </div>
          <MoviesGrid
            patch={`movie/popular?language=es-ES&page=${count}&region=es`}
          />
        </div>
      </div>
      <div className="movies-buttons-container">
        <button
          className="movies-button-left"
          onClick={count !== 1 ? () => setCount(count - 1) : null}
        >
          Anterior
        </button>
        <button
          id="button"
          className="movies-button-right"
          onClick={() => setCount(count + 1)}
        >
          Siguiente
        </button>
      </div>
    </>
  );
}
