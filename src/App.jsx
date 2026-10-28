import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import { useState } from "react";
import games from "./data/games.json";



function App() {
const [search, setSearch] = useState("");

 return (
<div className="game-list">

    <Header title="🎮 Game Collection" />

    <div className="games">

        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        
        <input

           className="search-input"

           type="text"

           placeholder="Zoek een game..."

           value={search}

           onChange={(e) => setSearch(e.target.value)}

        />

        {games

        .filter((game) =>

           game.title.toLowerCase().includes(search.toLowerCase())

        )

       .map((game) => (

         <GameCard

            key={game.id}

            title={game.title}

            platform={game.platform}

            genre={game.genre}

            rating={game.rating}

            year={game.year}

        />

   ))}


        <p>Naam: Aaron Macmillan</p>

        <p>Studentnummer: 2238167</p>

        <p>Klas: 25B</p>

    </div>

    <Footer />

</div>
 )
};
export default App;