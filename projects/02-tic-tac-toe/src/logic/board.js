import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    for (const combo of WINNER_COMBOS ) {
      const [a,b,c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    // revisamos si el tablero esta lleno
    return newBoard.every((square) => square !== null)
 } 