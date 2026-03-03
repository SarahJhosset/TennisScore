import Tennis from "./tennis.js";

describe("Tennis Scorer", () => {
    //Inicio del juego  =>   "Love - Love"
  it("toma en cuenta el caso de inicio del juego", () => {
    let tennis = new Tennis();
    expect(tennis.score()).toEqual("Love - Love");
  });

  //Jugador 1 anota 1 vez jugador 2 en 0=> "15 - Love"
  it("jugador 1 anota jugador dos en cero", () => {
    let tennis = new Tennis();   //Inicializar  ->ARRANGE
    tennis.player1Scores();      //inicializar
    let resultado =tennis.score() //Ejecutar metodo a probar  ->ACT
    expect(resultado).toEqual("15 - Love"); //Vericar    ->ASSERT
  });
  it("jugador 1 anota 2 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("30 - Love");
  });
  it("jugador 1 anota 3 veces jugador dos en cero", () => {
    let tennis = new Tennis();
    tennis.player1Scores();
    tennis.player1Scores();
    tennis.player1Scores();
    expect(tennis.score()).toEqual("40 - Love");
  });

  it("jugador 1 anota 4 veces, Game for Player 1", () => {
    const game = new Tennis();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    expect(game.score()).toEqual("Game for Player 1");
  });

  //Para el jugador 2
  it("jugador 2 anota 1, ser Love - 15", () => {
    const game = new Tennis();
    game.player2Scores();
    expect(game.score()).toEqual("Love - 15");
  });

  it("jugador 2 anota 2 veces, Love - 30", () => {
    const game = new Tennis();
    game.player2Scores();
    game.player2Scores();
    expect(game.score()).toEqual("Love - 30");
  });

  it("jugador 2 anota 3 veces, Love - 40", () => {
    const game = new Tennis();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    expect(game.score()).toEqual("Love - 40");
  });

  it("jugador 2 anota 4, Game for Player 2", () => {
    const game = new Tennis();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    expect(game.score()).toEqual("Game for Player 2");
  });

  // Jugador 1 anota 3 veces jugador 2 anota 3 veces=> "Deuce"
  it("ambos jugadores anotan 3, Deuce", () => {
      const game = new Tennis();
      game.player1Scores();
      game.player1Scores();
      game.player1Scores();
      game.player2Scores();
      game.player2Scores();
      game.player2Scores();
      expect(game.score()).toEqual("Deuce");
  });
// Si el juego esta en Deuce jugador 1 anota => "Advantage for Player 1"
  it("desde Deuce jugador 1 anota, Advantage for Player 1", () => {
    const game = new Tennis();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    game.player1Scores();
    expect(game.score()).toEqual("Advantage for Player 1");
  });
// Si el juego esta en Deuce jugador 2 anota => "Advantage for Player 2"
  it("desde Deuce jugador 2, Advantage for Player 2", () => {
    const game = new Tennis();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    expect(game.score()).toEqual("Advantage for Player 2");
  });
// estado en Advantage del jugador 1 anota una vez mas => "Game For Player 1"
  it("desde Advantage jugador 1 anota de nuevo, Game for Player 1", () => {
    const game = new Tennis();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    game.player1Scores();
    game.player1Scores();
    expect(game.score()).toEqual("Game for Player 1");
  });
  // estado en Advantage del jugador 2 anota una vez mas => "Game For Player 2"
  it("desde Advantage jugador 2 anota de nuevo deberia ganar Game for Player 2", () => {
   const game = new Tennis();
   game.player1Scores();
   game.player1Scores();
   game.player1Scores();
   game.player2Scores();
   game.player2Scores();
   game.player2Scores();
   game.player2Scores();
   game.player2Scores();
   expect(game.score()).toEqual("Game for Player 2");
  });

  //Desde Advantage del jugador 1 el jugador 2 anota => "Deuce"
  it("desde Advantage volver a Deuce", () => {
    const game = new Tennis();
    game.player1Scores();
    game.player1Scores();
    game.player1Scores();
    game.player2Scores();
    game.player2Scores();
    game.player2Scores();
    game.player1Scores(); // Advantage Player 1
    game.player2Scores(); // Vuelve a Deuce
    expect(game.score()).toEqual("Deuce");
  });
});



