
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((r) => r.json())
      .then(setMovie);
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <div>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map((g, i) => (
        <span key={i}>{g}</span>
      ))}
    </div>
  );
}

export default Movie;
