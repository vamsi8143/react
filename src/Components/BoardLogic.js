import React from "react";
import '../App.css';
import { useState } from 'react';
import Square from './Square';
import CalculateWinner from './CalculateWinner';

const BoardLogic = ({xIsnext, squares, onPlay}) => {

    const onHandleClick = (i) => {
    const nextSquares = squares.slice();

    if(CalculateWinner(squares) || squares[i]){
      return;
    }

    if(xIsnext){
      nextSquares[i] = "X";
    }else{
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }

  const winner = CalculateWinner(squares);
  let status;
  if(winner){
    status = "Winner "+ winner;
  }else{
    status ="Next Player "+ (xIsnext ? "X" : "O");
  }

  return (
    <div>
      <div className="App">
        <h1>Hello React!!</h1>
      </div>
      <h1>Game Status: {status}</h1>
      <div className='table-body'>
        <div className='board-row'>
          <Square value={squares[0]} onSquareClick={()=>{onHandleClick(0)}} />
          <Square value={squares[1]} onSquareClick={()=>{onHandleClick(1)}}/>
          <Square value={squares[2]} onSquareClick={()=>{onHandleClick(2)}}/>       
        </div>
        <div className='board-row'>
        <Square value={squares[3]} onSquareClick={()=>{onHandleClick(3)}}/>
        <Square value={squares[4]} onSquareClick={()=>{onHandleClick(4)}}/>
        <Square value={squares[5]} onSquareClick={()=>{onHandleClick(5)}}/>
        </div>
        <div className='board-row'>
        <Square value={squares[6]} onSquareClick={()=>{onHandleClick(6)}}/>
        <Square value={squares[7]} onSquareClick={()=>{onHandleClick(7)}}/>
        <Square value={squares[8]} onSquareClick={()=>{onHandleClick(8)}}/>
        </div>
      </div>
    </div>
  );
}

export default BoardLogic;