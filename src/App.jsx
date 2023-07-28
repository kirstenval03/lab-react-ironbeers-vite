import "./App.css";
import AllBeersPage from "./pages/AllBeersPage";
import HomePage from "./pages/HomePage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* ITERATION 3 NAV BAR */}
      <Navbar></Navbar>

      {/* ITERARION 1 ROUTES */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<AllBeersPage />}></Route>
        <Route path="/random-beer" element={<RandomBeerPage />}></Route>
        <Route path="/new-beer" element={<AddBeerPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;