import React from "react";
import Square from "./Square";



class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: true,
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
      });
    }

    handleRestart() {
      this.setState({
        squares: Array(9).fill(null),
        xIsNext: true,
      });
    }
  
    renderSquare(i) {
      const valeurCase = this.state.squares[i];
      let classeCase = "";

      if (valeurCase=== "X") {
        classeCase= " text-orange-500"
      }else if ( valeurCase ==="O") {
        classeCase= " text-blue-500"
      }
      


      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
          className={classeCase}
        />
      );
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
  let status;
  let statusClassName = "mb-6 font-bold text-lg";
  let currentPlayerClassName = this.state.xIsNext ? "text-orange-500" : "text-blue-500";

  if (winner) {
    const winningPlayerClassName = winner === "X" ? "text-orange-500" : "text-blue-500";
    status = <span className={winningPlayerClassName}>Gagnant: {winner}</span>;
  } else if( this.state.squares.every((square)=>square !== null)){
    status = <span className="text-gray-500">Match nul !</span>;
  }
  
  else {
    const nextPlayer = this.state.xIsNext ? <span className={currentPlayerClassName}>X</span> : <span className={currentPlayerClassName}>O</span>;
    status = <>Prochain Joueur: {nextPlayer}</>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className={statusClassName}>{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>

        <button 
        onClick={() => this.handleRestart()}
        className="text-xs bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-50% to-orange-500 to-90% ... mt-2 p-1 rounded"
        >
        Recommencer</button>
        </div>
      );
    }
  }


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }




  export default Board