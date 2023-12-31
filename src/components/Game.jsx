import React from "react";
import Board from "./Board";
import TicTacToeTitle from "./title";




class Game extends React.Component {
    render() {
      return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-50% to-orange-500 to-90% ...">
        <div className=" rounded-lg w-3/4 h-1/2 flex flex-col items-center  bg-yellow-200 shadow-md sm:w-2/4 sm:h-3/4">
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