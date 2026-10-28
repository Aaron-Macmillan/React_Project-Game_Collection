import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

const games = [

    {
        id: 1,
        title: "Minecraft",
        platform: "PC"
    },

    {
        id: 2,
        title: "Mario Kart",
        platform: "Nintendo Switch"
    },

    {
        id: 3,
        title: "Rocket League",
        platform: "PlayStation 5"
    },

    {
        id: 4,
        title: "Just Cause 2",
        platform: "Xbox 360"
    }

];

function App() { 
 return (
<div className="game-list">

    <Header title="🎮 Game Collection" />

    <div className="games">

        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        
        {games.map((game) => (

        <GameCard

        key={game.id}

        title={game.title}

        platform={game.platform}

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