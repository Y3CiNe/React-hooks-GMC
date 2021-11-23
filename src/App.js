import React from "react";
import "./App.css";
import Nav from "./component/navbar.js";
import MovieList from "./component/MovieList.jsx";
function App() {
  return (
    <div className="App">
      <Nav />
      <MovieList />
    </div>
  );
}

export default App;