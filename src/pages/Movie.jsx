import React, { useState, useEffect } from "react";
import "../css/Movie.css";
import getMovies from "../services/fecth.jsx";
import { Link as WouterLink } from "wouter";

const Link = ({ href, ...rest }) => {
  const LinkComponent = href.indexOf("://") === -1 ? WouterLink : "a";
  return <LinkComponent href={href} {...rest} />;
};

export default function Movie({ params }) {
  const { id } = params;
  const [config, setConfig] = useState({ loading: true, data: null });
  const [movie, setMovie] = useState({ loading: true, data: null });
  const [movieRelease, setMovieRelease] = useState({
    loading: true,
    data: null,
  });
  const [credits, setCredits] = useState({ loading: true, data: null });
  const [video, setVideo] = useState({ loading: true, data: null });
  const director = credits?.data?.crew?.filter(
    ({ job }) => job === "Director"
  )[0];
  const character = credits?.data?.crew?.filter(
    ({ job }) => job === "Characters"
  )[0];
  const screenplay = credits?.data?.crew
    ?.filter(({ job }) => job === "Screenplay")
    .find(({ name }) => name !== director?.name);
  const story = credits?.data?.crew
    ?.filter(({ job }) => job === "Story")
    .find(({ name }) => name !== director?.name);
  const date = movieRelease?.data?.results
    .find((lang) => lang.iso_3166_1 === "ES")
    .release_dates[0].release_date.slice(0, 10);

  function toHoursAndMinutes(totalMinutes) {
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    return `${padTo2Digits(hours)}h${padTo2Digits(minutes)}m`;
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  useEffect(() => {
    getMovies(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3966c5132f1ab5d93f46bc5453fc4456&language=es-ES`
    ).then((movie) => setMovie({ loading: false, data: movie }));
    getMovies(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=3966c5132f1ab5d93f46bc5453fc4456&language=es-ES`
    ).then((movie) => setMovieRelease({ loading: false, data: movie }));
    getMovies(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3966c5132f1ab5d93f46bc5453fc4456&language=es-ES`
    ).then((movie) => setCredits({ loading: false, data: movie }));
    getMovies(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3966c5132f1ab5d93f46bc5453fc4456&language=es-ES`
    ).then((movie) => setVideo({ loading: false, data: movie }));
    getMovies(
      "https://api.themoviedb.org/3/configuration?api_key=3966c5132f1ab5d93f46bc5453fc4456"
    ).then((configuration) =>
      setConfig({ loading: false, data: configuration.images })
    );
  }, [id]);
  return (
    <div
      className="banner-movie-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${config?.data?.base_url}${config?.data?.backdrop_sizes[3]}${movie?.data?.backdrop_path})`,
      }}
    >
      <div className="banner-container">
        <div className="banner-section1">
          <div className="banner-container-img">
            <img
              src={`${config?.data?.base_url}${config?.data?.poster_sizes[3]}${movie?.data?.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="banner-container-title">
            <div className="banner-container-title-child">
              <h2>
                {movie?.data?.title} <span>({date?.split("-")[0]})</span>
              </h2>
              <div className="red-movie"></div>
              <div className="banner-container-genres">
                <div className="item-genres">
                  <div className="circle first-circle"></div>
                  <p>
                    {date?.split("-")[2]}/{date?.split("-")[1]}/
                    {date?.split("-")[0]}
                  </p>
                </div>
                <div className="item-genres">
                  <div className="circle"></div>
                  <p>
                    {movie?.data?.genres.map((genre, index) =>
                      index === movie?.data?.genres?.length - 1
                        ? genre.name
                        : `${genre.name},`
                    )}
                  </p>
                </div>
                <div className="item-genres">
                  <div className="circle"></div>
                  <p>{toHoursAndMinutes(movie?.data?.runtime)}</p>
                </div>
              </div>
              <div className="banner-continer-content">
                <h3 className="tagline">{movie?.data?.tagline}</h3>
                <h3>Vista General</h3>
                <p>{movie?.data?.overview}</p>
              </div>

              <ol className="banner-container-persons">
                <li className="profile">
                  <p className="name">{director?.name}</p>
                  <p className="character">{director?.job}</p>
                </li>
                <li className="profile">
                  <p className="name">{character?.name}</p>
                  <p className="character">{character?.job}</p>
                </li>
                <li className="profile">
                  <p className="name">{screenplay?.name}</p>
                  <p className="character">{screenplay?.job}</p>
                </li>
                <li className="profile">
                  <p className="name">{story?.name}</p>
                  <p className="character">{story?.job}</p>
                </li>
              </ol>
            </div>
            <div className="vertical-line"></div>
          </div>
        </div>
        <Link
          id="button"
          className="movies-button-right button-movie"
          href={`https://www.youtube.com/watch?v=${video?.data?.results[0]?.key}`}
          target="_blank"
        >
          Trailer
        </Link>
      </div>
    </div>
  );
}
