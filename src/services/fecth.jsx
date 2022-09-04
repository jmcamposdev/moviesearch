export default function getMovies(url) {
  const apiURL = url;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      return response;
    });
}
