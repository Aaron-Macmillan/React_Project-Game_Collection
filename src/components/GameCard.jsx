
function GameCard(props) {
    return (
        <div className="game-card">

            <div className="game-image-container">
                {props.image ? (
                    <img
                        src={`/images/${props.image}`}
                        alt={props.title}
                        className="game-image"
                    />
                ) : (
                    <div className="game-image-placeholder">
                        🎮
                    </div>
                )}
            </div>

            <h2>{props.title}</h2>

            <p>Platform: {props.platform}</p>

            <p>Genre: {props.genre}</p>

            <p>Rating: ⭐ {props.rating}</p>

            <p>Jaar: {props.year}</p>

            <p>🎮 Developer: {props.developer || "Onbekend"}</p>

            <p>👥 Multiplayer: {props.multiplayer || "Onbekend"}</p>

            <button
                className="favorite-button"
                onClick={props.onToggleFavorite}
            >
                {props.favorite
                    ? "❤️ Favoriet"
                    : "🤍 Voeg toe aan favorieten"}
            </button>

        </div>
    );
}

export default GameCard;
