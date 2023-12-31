import './card.css'
import "./flip-transition.css"
import React from 'react';

function randNum(max) {
    return Math.floor(Math.random() * max)
}

const Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randNum(1000)}`)
    .then(response => response.json()) 
    
function Card({onClick}){
    return(
        <div className='card' onClick={onClick}>
            <div className='card-back'></div>
            <div className='card-front'>
                <div className='pokeInfo'>
                    <img className='img' alt="pokesprite" src={Pokemon.sprites.front_default}/>
                    <h1 className='PokeName'>{Pokemon.name.toUpperCase()}</h1>
                    <h3 className='PokeType'>{Pokemon.types[0].type.name.toUpperCase()}</h3>
                </div>
                <div className="listedMoves">
                    <h3 className='q1'>{Pokemon.moves[randNum(Pokemon.moves.length)].move.name}</h3>
                    <h3 className='q2'>{Pokemon.moves[randNum(Pokemon.moves.length)].move.name}</h3>
                    <h3 className='q3'>{Pokemon.moves[randNum(Pokemon.moves.length)].move.name}</h3>
                    <h3 className='q4'>{Pokemon.moves[randNum(Pokemon.moves.length)].move.name}</h3>
                </div>
            </div>
        </div>
    )
}

export default Card;