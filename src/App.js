// First Steps:
  // Group the squares into rows with divs and add some CSS classes --> We need 3 squares per row
  // Reuse the Square component

// Pass down values to temporarly fill the squares
  // Use props

// Add interactivity
  // The Square component needs to render e.g. 'x' when clicked

// Complete Game:
  // 1. Alternate “X”s and “O”s on the board
  // 2. Determine a winner.

// Determine a winner:
  // The board needs to somehow know the STATE of each of the 9 Square components
  // The BEST APPROACH is to store the game’s STATE in the parent Board component
  // REMEMBER: The Board component can tell each Square what to display by passing a prop
      //  Next Steps:
        // Square needs to update the Board’s state

// REMEMBER: Each Square has its own state - the value stored in each Square is completely independent of the others

import { useState } from 'react';

export default function Board() {

// Let multiple child components communicate by declaring the STATE in the parent
// Create an array with 9 elements to be set to 'null'
  const [squares, setSquares] = useState(Array(9).fill(null));

// Declare a function that will trigger the change
// The slice() method returns selected elements in an array, as a new array
  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

// Pass down the prop to the child components
// The 9 squares need to call handleClick
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

// Square is Board's child in the component tree
// value & onSquareClick are props
function Square({value, onSquareClick}) {

  return <button className="square" onClick={onSquareClick}>{value}</button>;

}