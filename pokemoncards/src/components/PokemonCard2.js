import React, {Component} from "react"

class PokemonCard2 extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            img : "",
            weight: "",
            height: "",
            species: "",
            baseExperience: ""
        }
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/2/')  
        .then(response => response.json())  
        .then(Pokemon1 => 
            this.setState({
                name: Pokemon1.name,
                img : Pokemon1.sprites.front_default,
                weight: Pokemon1.weight,
                height: Pokemon1.height,
                species: Pokemon1.species.name,
                baseExperience: Pokemon1.base_experience            })
        )
    }

    render(){
        return(
            <section className="pokemon-card">
                <div className="name-check">
                    <h2>{this.state.name}</h2>
                    <input type="checkbox" name="pick-pokemon" className="pick-pokemon"/>
                </div>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="smtn"/>
                <div className="basic-info">
                    <p className="weight">weight: {this.state.weight}</p>
                    <p className="species">species: {this.state.species}</p>
                </div>
                <div className="basic-info">
                    <p className="height">height: {this.state.height}</p>
                    <p className="bs">base experience: {this.state.baseExperience}</p>
                </div>
            </section>
        )
    }
    
}
export default PokemonCard2