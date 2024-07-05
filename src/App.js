import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Container } from "react-bootstrap";
import { MoviesList } from "./Components/MoviesList";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MovieDetails } from "./Components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpageCount] = useState([]);
  //get all movies by axios
  const getAllMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=39680c6ad9246ff578d642f86bb497f4&language=ar"
    );
    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  //to search in api
  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=39680c6ad9246ff578d642f86bb497f4&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setpageCount(res.data.total_pages);
    }
  };

  ///====pagination=======////
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=39680c6ad9246ff578d642f86bb497f4&page=${page}&language=ar`
    );

    setMovies(res.data.results);
    setpageCount(res.data.total_pages);
  };

  return (
    <div>
      <NavBar search={search}></NavBar>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                ></MoviesList>
              }
            ></Route>
            <Route
              path="/movie/:id"
              element={<MovieDetails></MovieDetails>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
