class Tennis {
    constructor() {
        this.player1Points = 0;
        this.player2Points = 0;
    }
    score(){
        const names = ["Love","15","30","40"];

        if (this.player1Points >= 3 && this.player2Points >= 3) {
            if (this.player1Points === this.player2Points) {
                return "Deuce";
            }
            if (this.player1Points - this.player2Points === 1) {
                return "Advantage for Player 1";
            }
            if (this.player2Points - this.player1Points === 1) {
                return "Advantage for Player 2";
            }
            if (this.player1Points - this.player2Points >= 2) {
                return "Game for Player 1";
            }
            if (this.player2Points - this.player1Points >= 2) {
                return "Game for Player 2";
            }
        }

        // cuando se llevan 2 puntos de diferencia y uno de los jugadores llega a 4 puntos o más, se declara ganador
        if (this.player1Points >= 4 && this.player1Points - this.player2Points >= 2) {
            return "Game for Player 1";
        }

        // anotar despues de deuce
        const p1 = names[this.player1Points] || "40";
        const p2 = names[this.player2Points] || "40";
        return `${p1} - ${p2}`;
    }

    player1Scores(){
        this.player1Points++;
    }

    player2Scores(){
        this.player2Points++;
    }
}

export default Tennis;