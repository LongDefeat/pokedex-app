import React from "react";
import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

/* Pokemon Card */
// const PokeCard = (props) => {
//     let img = `${POKE_API}${props.id}.png`
//     return <div className="PokeCard">
//                 <h3 className="PokeCard-title">{props.name}</h3>
//                 <img src={img} className="PokeCard-img"/>
//                  <ul>
//                     <li className="Pokecard-data">Type: {props.type}</li>
//                     <li className="Pokecard-data">EXP: {props.exp}</li>
//                 </ul>
//             </div>
// }

const PokeCard = ({id, name, type, exp}) => {
    let img = `${POKE_API}${id}.png`;
   return  (<div className="Pokecard">
                <h4 className="PokeCard-title">{name}</h4>
                <img src={img} className="Pokecard-img" alt=""/>
                <div>
                    <ul>
                        <li>Type: {type}</li>
                        <li>EXP: {exp}</li>
                    </ul>
                </div>
            </div>)
}

export default PokeCard;