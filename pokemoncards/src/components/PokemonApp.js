import React from "react" 
import PokemonCard1 from "./PokemonCard1"
import PokemonCard2 from "./PokemonCard2"
import PokemonCard3 from "./PokemonCard3"
import PokemonCard4 from "./PokemonCard4"


function PokemonApp(){
    return(
        <div>
            <section className="wrapper">
                <section id="chosen-pokemons">
                    <div className="team-name">
                    <h2>choose your team from the pokemons below</h2>
                        <h2>your team name</h2>
                        <input type="text" name="teamname" id="teamName" placeholder="What Is Your Team Name?"/>
                    </div>
                    <div class="pokemon-team">

                    </div>
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