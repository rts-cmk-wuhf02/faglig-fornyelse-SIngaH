import React, {Component} from "react"

class PokemonCard3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            pokemon : [],
            checked: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){
        fetch('https://pokeapi.co/api/v2/pokemon/5/')  
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
        const doneStyles ={
            border:"solid 6px blue",
            backgroundColor: "#20e5ff"
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
                <hr/>
                <h3>Abilities</h3>
                <ul>
                    <li>{this.state.pokemon[6]}</li>
                    <li>{this.state.pokemon[7]}</li>
                </ul>
            </section>
        )
    }
    
}
export default PokemonCard3