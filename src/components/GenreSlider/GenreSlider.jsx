import React, { useState } from "react";
import "../../css/GenreSlider.css";
import MoviesSlider from "../../services/MoviesSlider.jsx";

export default function GenreSlider() {
  const [active, setActive] = useState("");
  const [genre, setGenre] = useState(28);
  const handleClick = (event) => {
    setActive(event.target.id);
    setGenre(event.target.id);
  };
  return (
    <div className="genre-container">
      <div className="genre-container-text-line">
        <div className="genre-container-title">
          <h2>Mejores Categorias</h2>
          <div className="genre-buttons">
            <button
              className={active === "28" ? "activo" : ""}
              id={"28"}
              onClick={handleClick}
            >
              Acción
            </button>
            <button
              className={active === "12" ? "activo" : ""}
              id={"12"}
              onClick={handleClick}
            >
              Aventura
            </button>
            <button
              className={active === "14" ? "activo" : ""}
              id={"14"}
              onClick={handleClick}
            >
              Fantasía
            </button>
            <button
              className={active === "27" ? "activo" : undefined}
              id={"27"}
              onClick={handleClick}
            >
              Terror
            </button>
          </div>
        </div>
        <div className="line"></div>
      </div>

      <MoviesSlider
        patch={`discover/movie?language=es-Es&region=es&sort_by=revenue.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`}
      />
    </div>
  );
}
