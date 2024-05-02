import React from "react";

const Card = (props) => {
  return (
    <div className="h-full w-1/2 flex flex-col items-center justify-center bg-stone-400 bg-opacity-60 border-2 border-gray-500 backdrop-blur-lg p-5 rounded-xl">
      <img src={props.img} alt="This logo" className="w-24 h-24" />
      <p className="text-center text-wrap overflow-hidden">{props.content}</p>
    </div>
  );
};

export default Card;
