import React, {Component} from "react"
import Card from "./Card.js"

class PokemonCard4 extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon : [],
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/9/')  
        .then(response => response.json())  
        .then(Pokemon => 
            this.setState({
                pokemon: [
                    Pokemon.name,                      //0
                    Pokemon.sprites.front_default,     //1
                    Pokemon.weight,                    //2
                    Pokemon.species.name,              //3
                    Pokemon.height,                    //4
                    Pokemon.base_experience,           //5
                    Pokemon.abilities[0].ability.name, //6
                    Pokemon.abilities[1].ability.name  //7
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
        return(
            <Card elements={{
                name: this.state.pokemon[0],
                img: this.state.pokemon[1],
                weight: this.state.pokemon[2],
                species: this.state.pokemon[3],
                height: this.state.pokemon[4],
                base_experience: this.state.pokemon[5],
                ability1: this.state.pokemon[6],
                ability2: this.state.pokemon[7],
                checked: this.state.checked,
                handleChange: this.handleChange
           }}/>
        )
    }
    
}
export default PokemonCard4