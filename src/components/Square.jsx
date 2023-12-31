import React from "react";


function Square(props) {
    return (
      <button 
      className={`bg-white border float-left text-xl font-bold h-14 w-14 leading-8 sm:h-20 sm:w-20  ${props.className}`}
      onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Square