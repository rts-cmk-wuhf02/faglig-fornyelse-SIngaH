import React, {Component} from "react"

class TeamName extends Component{
    constructor(){
        super()
        this.state = {
            teamName: "",
            firstName: "",
            textarea:"",
            color:"",
            display: true
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
            display: !this.state.display
        })
    }
    render(){
        let btnChange = {
            margin: "15px 0 0 0"
        }
        let displayed = this.state.display ? "block" : "none"
        return(       
                <div className="team-name">
                    <h2 className="choose">choose your team from the pokemons below</h2>
                    <h2 className="name-of-team">
                        {this.state.firstName ? this.state.firstName + "´s " + this.state.teamName : "Your team name"}
                    </h2>
                    <p>
                        {this.state.textarea ? this.state.textarea : "Your Team Description"}
                    </p>
                    <div className="color-box">
                        <div style={{backgroundColor: this.state.color}} className="color"></div>
                        <label>Team Color</label>
                    </div>
                    <div className="input-btn">
                        <input 
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange}
                            placeholder="Your First Name"
                            style={{display: displayed}}
                            id="teamName" 
                        />
                        <input 
                            name="teamName" 
                            value={this.state.teamName} 
                            onChange={this.handleChange}
                            placeholder="Choose Your Team Name"
                            style={{display: displayed}}
                            id="teamName" 
                        />
                        <textarea
                            type="text"
                            name="textarea"
                            value={this.state.textarea}
                            onChange={this.handleChange}
                            placeholder="Team Descripton"
                            style={{display: displayed}}
                            id="teamName" 
                        />
                        <select 
                            value={this.state.color} 
                            name="color" 
                            onChange={this.handleChange}
                            id="teamName" 
                            style={{display: displayed}}
                        >
                            <option value="">-- Choose A Team Color</option>
                            <option value="#3fff2d">Green</option>
                            <option value="Red">Red</option>
                            <option value="#24d7ff">Blue</option>
                            <option value="#f832ff">Purple</option>
                        </select>
                        <button 
                            style={!this.state.display ? btnChange : null} 
                            onClick={this.handleSubmit}>{this.state.display ? "Submit" : "Change"}
                        </button>
                    </div>
                </div>
        )
    }

}

export default TeamName