import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./MoviesSlider.css";

//Importamos Componentes
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "./MoviesGrid.css";
import getMovies from "./fecth.jsx";

export default function MoviesSlider({ patch }) {
  /* eslint-disable */
  const [location, setLocation] = useLocation();
  /* eslint-enable */
  const Patch = patch;
  const [movies, setMovies] = useState({ loading: true, data: null });
  const [url, seturl] = useState(
    `https://api.themoviedb.org/3/${Patch}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  const [config, setConfig] = useState({ loading: true, data: null });
    /* eslint-disable */
  const [companie, setCompanie] = useState({ loading: true, data: null });
    /* eslint-enable */
  useEffect(() => {
    seturl(
      `https://api.themoviedb.org/3/${Patch}&api_key=${process.env.REACT_APP_API_KEY}`
    );
  }, [Patch]);
  useEffect(() => {
    setMovies({ loading: true, data: null });
    getMovies(url).then((movie) => setMovies({ loading: false, data: movie }));
    getMovies(
      `https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`
    ).then((configuration) =>
      setConfig({ loading: false, data: configuration.images })
    );

    getMovies(
      `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_API_KEY}&query=Disney&page=1`
    ).then((companie) => setCompanie({ loading: false, data: companie }));
  }, [url]);

  return (
    <div className="movies-container-slider">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={1}
        loop={true}
        className="mySwiper"
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {movies.loading ? (
          <>
            <SwiperSlide>Cargando</SwiperSlide>
            <SwiperSlide>Cargando</SwiperSlide>
            <SwiperSlide>Cargando</SwiperSlide>
          </>
        ) : (
          movies.data.results.map((movie) => (
            <SwiperSlide key={movie.id}>
              {config.loading ? (
                <p>Cargando</p>
              ) : (
                <>
                  <img
                    onClick={() => setLocation(`/movie/${movie.id}`)}
                    src={`${config.data.base_url}${config.data.backdrop_sizes[0]}${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <p>{movie.title}</p>
                </>
              )}
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
}
