import React from "react";
import { useLocation } from "wouter";

import "../../css/ListCompanies.css";
import Pixar from "../../img/pixar.svg";
import Marvel from "../../img/marvel.svg";
import Disney from "../../img/disney.svg";
import National from "../../img/national.svg";
import StarWar from "../../img/starwars.svg";

export default function ListCompanies() {
  /* eslint-disable */
  const [location, setLocation] = useLocation();
  /* eslint-enable */

  return (
    <div className="companies-grid">
      <div
        onClick={() => setLocation(`/companie/2`)}
        className="companies-container disney"
      >
        <img src={Disney} alt="Disney" />
      </div>
      <div
        onClick={() => setLocation(`/companie/3`)}
        className="companies-container pixar"
      >
        <img src={Pixar} alt="Pixar" />
      </div>
      <div
        onClick={() => setLocation(`/companie/420`)}
        className="companies-container marvel"
      >
        <img src={Marvel} alt="Marvel" />
      </div>
      <div
        onClick={() => setLocation(`/companie/95365`)}
        className="companies-container starwar"
      >
        <img src={StarWar} alt="StarWar" />
      </div>
      <div
        onClick={() => setLocation(`/companie/7521`)}
        className="companies-container national"
      >
        <img src={National} alt="National" />
      </div>
    </div>
  );
}
