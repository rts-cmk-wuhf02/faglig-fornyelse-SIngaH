import React, {Component} from "react"

class TeamName extends Component{
    constructor(){
        super()
        this.state = {
            teamName: "",
            firstName: "",
            textarea:"",
            display: "block"
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(){
        this.setState({
            display: "none"
        })
    }
    render(){
        let nameOfTeam = this.state.firstName ? this.state.firstName + "´s " + this.state.teamName : "Your team name"; 
        let textarea = this.state.textarea ? this.state.textarea : "Your Team Description"
        return(       
                <div className="team-name">
                    <h2 className="choose">choose your team from the pokemons below</h2>
                    <h2 className="name-of-team">{nameOfTeam}</h2>
                    <p>{textarea}</p>
                    <div className="input-btn">
                        <input 
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange}
                            placeholder="Your First Name"
                            style={{display: this.state.display}}
                            id="teamName" 
                        />
                        <input 
                            name="teamName" 
                            value={this.state.teamName} 
                            onChange={this.handleChange}
                            placeholder="Choose Your Team Name"
                            style={{display: this.state.display}}
                            id="teamName" 
                        />
                        <textarea
                            type="text"
                            name="textarea"
                            value={this.state.textarea}
                            onChange={this.handleChange}
                            placeholder="Team Descripton"
                            style={{display: this.state.display}}
                            id="teamName" 
                        />
                        <button style={{display: this.state.display}} onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
        )
    }

}

export default TeamName