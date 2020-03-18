import React, {Component} from "react"

class TeamName extends Component{
    constructor(){
        super()
        this.state={
            teamName: "",
            display: "block"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event){
        this.setState({
            teamName: event.target.value
        })
    }
    handleSubmit(){
        this.setState({
            display: "none"
        })
    }
    render(){
        let nameOfTeam = this.state.teamName ? this.state.teamName : "Your team name"; 
        return(
            <div className="team-name">
                <h2>choose your team from the pokemons below</h2>
                <h2>{nameOfTeam}</h2>
                <input 
                    style={{display: this.state.display}}
                    type="text" 
                    name="teamname" 
                    id="teamName" 
                    placeholder="Choose Your Team Name?"
                    value={this.state.teamName}
                    onChange={this.handleChange}
                />
                <button style={{display: this.state.display}} onClick={this.handleSubmit}>Team Name Chosen</button>
            </div>
        )
    }

}

export default TeamName