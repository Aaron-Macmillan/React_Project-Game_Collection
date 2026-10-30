
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";
import { useState } from "react";
import games from "./data/games.json";

function App() {
    const [search, setSearch] = useState("");
    const [favorites, setFavorites] = useState([]);
    const [onlyFavorites, setOnlyFavorites] = useState(false);

    function toggleFavorite(id) {
        setFavorites((currentFavorites) =>
            currentFavorites.includes(id)
                ? currentFavorites.filter((favoriteId) => favoriteId !== id)
                : [...currentFavorites, id]
        );
    }

    const filteredGames = games.filter((game) => {
        const zoekterm = search.toLowerCase();

        const matchesSearch =
            game.title.toLowerCase().includes(zoekterm) ||
            game.genre.toLowerCase().includes(zoekterm) ||
            game.platform.toLowerCase().includes(zoekterm);

        const matchesFavorites =
            !onlyFavorites || favorites.includes(game.id);

        return matchesSearch && matchesFavorites;
    });

    return (
        <div className="game-list">
            <Header title="🎮 Aaron's Game Collection" />

            <div className="games">
                <h2>Welkom bij mijn Game Collection!</h2>

                <input
                    className="search-input"
                    type="text"
                    placeholder="Zoek op titel, genre of platform..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div>
                    <button
                        className={`filter-button ${
                            onlyFavorites ? "active" : ""
                        }`}
                        onClick={() =>
                            setOnlyFavorites(!onlyFavorites)
                        }
                    >
                        {onlyFavorites
                            ? "🎮 Toon alle games"
                            : "❤️ Alleen favorieten"}
                    </button>
                </div>

                <p>
                    {filteredGames.length} game(s) gevonden
                </p>

                <div className="game-grid">
                    {filteredGames.map((game) => (
                        <GameCard
                            key={game.id}
                            title={game.title}
                            platform={game.platform}
                            genre={game.genre}
                            rating={game.rating}
                            year={game.year}
                            image={game.image}
                            developer={game.developer}
                            multiplayer={game.multiplayer}
                            favorite={favorites.includes(game.id)}
                            onToggleFavorite={() =>
                                toggleFavorite(game.id)
                            }
                        />
                    ))}
                </div>

                {filteredGames.length === 0 && (
                    <p>
                        Geen games gevonden. Probeer een andere
                        zoekterm of pas je favorietenfilter aan.
                    </p>
                )}

                <p>Naam: Aaron Macmillan</p>
                <p>Studentnummer: 2238167</p>
                <p>Klas: 25B</p>
            </div>

            <Footer />
        </div>
    );
}

export default App;
