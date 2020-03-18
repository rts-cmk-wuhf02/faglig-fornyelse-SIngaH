import React from "react"

function Card(props){
    const doneStyles ={
        border:"solid 6px blue",
        backgroundColor: "#20e5ff",
        margin:"0"
    }
    const imgStyle={
        backgroundColor: "#8cecff",
        border:"solid 2px blue"
    }
    return(
        <div>
            <div className="picked">
                <img style={{display: props.elements.checked ? "block" : "none"}} src={props.elements.img} alt={props.elements.name}/>
                <h2 style={{display: props.elements.checked ? "block" : "none"}}>{props.elements.name}</h2>
            </div>
            <section className="pokemon-card" style={props.elements.checked ? doneStyles : null}>
                <div className="name-check">
                    <h2>{props.elements.name}</h2>
                    <input 
                        type="checkbox" 
                        name="pick-pokemon" 
                        className="pick-pokemon"
                        checked={props.elements.checked}
                        onChange={props.elements.handleChange}
                    />
                </div>
                <img style={props.elements.checked ? imgStyle : null} className="pokemon-img" src={props.elements.img} alt={props.elements.name}/>
                <div className="basic-info">
                    <p className="weight">weight: {props.elements.weight}</p>
                    <p className="species">species: {props.elements.species}</p>
                </div>
                <div className="basic-info">
                    <p className="height">height: {props.elements.height}</p>
                    <p className="bs">base experience: {props.elements.base_experience}</p>
                </div>
                <hr style={props.elements.checked ? imgStyle : null}/>
                <h3>Abilities</h3>
                <ul>
                    <li>{props.elements.ability1}</li>
                    <li>{props.elements.ability2}</li>
                </ul>
            </section>
        </div>
    )
}
export default Card