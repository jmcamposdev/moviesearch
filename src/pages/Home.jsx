import React from "react";

//Componentes Importados
import Banner from "../components/banner/Banner.jsx";
import ListComanies from "../components/ListCompanies/ListCompanies.jsx";
import ListMovies from "../components/ListMovies//ListMovies.jsx";
import GenreSlider from "../components/GenreSlider/GenreSlider.jsx";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <ListComanies />
        <GenreSlider />
        <ListMovies />
      </div>
    </>
  );
}
