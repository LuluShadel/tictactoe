import React from "react";
import Board from "./Board";
import TicTacToeTitle from "./title";




class Game extends React.Component {
    render() {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-50% to-orange-500 to-90% ...">
        <div className=" rounded-lg w-2/4 h-3/4 flex flex-col items-center justify-between bg-yellow-200 shadow-md">
            <TicTacToeTitle />
          <div className="mb-8">
            <Board />
          </div>
        </div>
        </div>
      );
    }
  }

  export default Game