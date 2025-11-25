import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then((r) => r.json())
      .then(setDirectors);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Directors Page</h1>

      {directors.map((d) => (
        <article key={d.name}>
          <h2>{d.name}</h2>
          <ul>
            {d.movies.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Directors;
