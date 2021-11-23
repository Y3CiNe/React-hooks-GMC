import React, { useState } from "react";
import Card from "./MovieCard";
import Img1 from "../Alpha.jpg";
import Img2 from "../Annabelle.jpg";
import Img3 from "../Creed II.jpg";
import Img4 from "../Jumanji.jpg";
import Img5 from "../Man of Steel.jpg";
import Img6 from "../Red Notice.jpg";
import Img7 from "../Spider-Man.jpg";
import Img8 from "../The Dark Knight Rises.jpg";
import Img9 from "../Tomb Raider.jpg";
import Img10 from "../Venom.jpg";
import Img11 from "../Verónica.jpg";
import Rating from "./Rate.js";
import AddMovie from "./addMovie/AddMovie";
function MovieList() {
  const [state, setState] = useState([
    {
      id: Math.random(),
      title: "Alpha",
      img: Img1,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "Alpha",
      img: Img2,
      rate: <Rating name="simple-controlled" value="3" />,
    },
    {
      id: Math.random(),
      title: "Annabelle",
      img: Img3,
      rate: <Rating name="simple-controlled" value={5} />,
    },
    {
      id: Math.random(),
      title: "Jumanji",
      img: Img4,
      rate: <Rating name="simple-controlled" value={5} />,
    },
    {
      id: Math.random(),
      title: "Man of Steel",
      img: Img5,
      rate: <Rating name="simple-controlled" value={3} />,
    },
    {
      id: Math.random(),
      title: "Red Notice",
      img: Img6,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "Spider-Man",
      img: Img7,
      rate: <Rating name="simple-controlled" value={1} />,
    },
    {
      id: Math.random(),
      title: "The Dark Knight Rises",
      img: Img8,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "Tomb Raider",
      img: Img9,
      rate: <Rating name="simple-controlled" value={2} />,
    },
    {
      id: Math.random(),
      title: "Venom",
      img: Img10,
      rate: <Rating name="simple-controlled" value={4} />,
    },
    {
      id: Math.random(),
      title: "Verónica",
      img: Img11,
      rate: <Rating name="simple-controlled" value={3} />,
    },
  ]);

  return (
    <div className="App">
      <div className="cards">
        {state.map((card) => (
          <Card
            className="card "
            key={card.id}
            img={card.img}
            title={card.title}
            rate={card.rate}
          />
        ))}
        <AddMovie
          className="card "
          addMovie={(newMovie) => this.add(newMovie)}
        />
      </div>
    </div>
  );
}

export default MovieList;