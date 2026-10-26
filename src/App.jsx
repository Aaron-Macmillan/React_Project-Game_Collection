import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameCard from "./components/GameCard";

function App() { 
 return (
<div className="game-list">

    <Header title="🎮 Game Collection" />

    <div className="games">

        <h2>Welkom bij mijn eerste React-applicatie!</h2>
        
        <GameCard
           title="Minecraft"
           platform="PC"
        />

        <GameCard
           title="Mario Kart"
           platform="Nintendo Switch"
        />

        <GameCard
           title="Rocket League"
            platform="PlayStation 5"
        />


        <p>Naam: Aaron Macmillan</p>

        <p>Studentnummer: 2238167</p>

        <p>Klas: 25B</p>

    </div>

    <Footer />

</div>
 )
};
export default App;