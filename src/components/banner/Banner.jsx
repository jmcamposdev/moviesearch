import "../../css/banner.css";
export default function Banner() {
  return (
    <div className="home-container">
      <div className="home-container-text">
        <h1>
          <span className="span1">Search</span>
          <span className="span2">Movies</span>
        </h1>
        <h4>
          Gracias a SearchMovies podras encontrar todas las proximas peliculas,
          los trending y las mas populares de tu gusto.
        </h4>
        <div className="home-scroll-container">
          <div className="home-scroll">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
            <span className="text">Scroll down</span>
          </div>
        </div>
      </div>
    </div>
  );
}
