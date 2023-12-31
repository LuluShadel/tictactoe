import React from "react";


function Square(props) {
    return (
      <button 
      className={`bg-white border float-left text-xl font-bold h-12 w-12 leading-8 ${props.className}`}
      onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

  export default Square