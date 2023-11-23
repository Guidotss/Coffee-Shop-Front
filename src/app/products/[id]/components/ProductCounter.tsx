"use client"
import { useState } from 'react';
export const ProductCounter = () => {
    const [ counter, setCounter ] = useState(1); 
    
    const increment = () => {
        setCounter(counter + 1);
    }

    const decrement = () => {
        if(counter > 1)
            setCounter(counter - 1);

    }

  return (
    <div className="w-full flex items-center justify-center gap-x-24 mt-10">
      <button 
        className="text-2xl text-white bg-primary_orange w-16 h-10  rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out"
        onClick={ decrement }
      >
        -
      </button>
      <span className="text-2xl md:text-3xl text-white w-7 text-center">{ counter }</span>
      <button 
        className="text-2xl text-white bg-primary_orange w-16 h-10 rounded-lg border-none outline-none hover:bg-opacity-80 transition-all duration-300 ease-in-out"
        onClick={ increment }
      >
        +
      </button>
    </div>
  );
};
