
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then((r) => r.json())
      .then(setActors);
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Actors Page</h1>

      {actors.map((a) => (
        <article key={a.name}>
          <h2>{a.name}</h2>
          <ul>
            {a.movies.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

export default Actors;
