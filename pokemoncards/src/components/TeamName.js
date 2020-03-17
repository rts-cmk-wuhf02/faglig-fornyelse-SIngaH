import React, {Component} from "react"

class TeamName extends Component{
    constructor(){
        super()
        this.state={
            teamName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({
            teamName: event.target.value
        })
    }
    render(){
        let nameOfTeam = this.state.teamName ? this.state.teamName : "Your team name"; 
        return(
            <div className="team-name">
                <h2>choose your team from the pokemons below</h2>
                <h2>{nameOfTeam}</h2>
                <input 
                    type="text" 
                    name="teamname" 
                    id="teamName" 
                    placeholder="What Is Your Team Name?"
                    value={this.state.teamName}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

}

export default TeamName