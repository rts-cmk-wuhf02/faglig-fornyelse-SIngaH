import React from "react" 
import TeamName from"./TeamName"
import PokemonCard1 from "./PokemonCard1"
import PokemonCard2 from "./PokemonCard2"
import PokemonCard3 from "./PokemonCard3"
import PokemonCard4 from "./PokemonCard4"


function PokemonApp(){
    return(
        <div>
            <section className="wrapper">
                <section id="chosen-pokemons">
                    <TeamName/>
                </section>
                <section id="cards">
                    <PokemonCard1/>
                    <PokemonCard2/>
                    <PokemonCard3/>
                    <PokemonCard4/>
                </section>
            </section>
        </div>
    )
}

export default PokemonApp