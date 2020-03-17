import React, {Component} from "react"

class PokemonCard2 extends Component{
    constructor(){
        super()
        this.state = {
            pokemon : [],
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/2/')  
        .then(response => response.json())  
        .then(Pokemon => 
            this.setState({
                pokemon: [
                    Pokemon.name,                   //0
                    Pokemon.sprites.front_default,  //1
                    Pokemon.weight,                 //2
                    Pokemon.species.name,           //3
                    Pokemon.height,                 //4
                    Pokemon.base_experience         //5
                ]          
            })
        )
    }
    handleChange(){
        this.setState(prevState =>{
            return{
                checked:!prevState.checked
            }
        })

    }

    render(){
        const doneStyles ={
            border:"solid 6px blue"
        }
        return(
            <section className="pokemon-card" style={this.state.checked ? doneStyles : null}>
                <div className="name-check">
                    <h2>{this.state.pokemon[0]}</h2>
                    <input 
                        type="checkbox" 
                        name="pick-pokemon" 
                        className="pick-pokemon"
                        checked={this.state.checked}
                        onChange={this.handleChange}
                    />
                </div>
                <img src={this.state.pokemon[1]} alt={this.state.pokemon[0]}/>
                <div className="basic-info">
                    <p className="weight">weight: {this.state.pokemon[2]}</p>
                    <p className="species">species: {this.state.pokemon[3]}</p>
                </div>
                <div className="basic-info">
                    <p className="height">height: {this.state.pokemon[4]}</p>
                    <p className="bs">base experience: {this.state.pokemon[5]}</p>
                </div>
            </section>
        )
    }
    
}
export default PokemonCard2