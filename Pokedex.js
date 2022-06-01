import React from "react";
import PokeCard from "./Pokecard";
import "./Pokedex.css";



const Pokedex = (props) => {
    return (
        <div className="Pokedex">
            <div className="Pokedex-cards">
                {props.pokemon.map(p => {
                   return (<PokeCard
                        id={p.id}
                        name={p.name}
                        type={p.type}
                        exp={p.base_experience}
                        obj={p}
                    />)
                })}
            </div>
        </div>
    )
}

export default Pokedex;