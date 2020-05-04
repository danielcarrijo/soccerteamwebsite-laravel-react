import React, { Component } from 'react'
import axios from 'axios'

export class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players : []
        }
    } 
    componentDidMount() {
        axios.get(this.props.url).then(response => {this.setState({players: response.data})})
    }
    render() {
        const { players } = this.state
        return (
            <div className="container mt-5">
                    <div className="row">
                        <div className="bg-primary  form-control position-title text-white bolder mt-5">{this.props.title}</div>
                        {players.map(player => (
                            <div className="card col-lg-4 col-xs-12 col-md-6 border-0" key={player.id}>
                                <div className="card-body">
                                    <img src={`img/jogadores/${player.img}`} className="img img-fluid" />
                                </div>
                                <div className="container">
                                    <div className="card-footer card-description rounded mt-1">
                                        <h2 className="text-white">{player.jersey}. {player.name}</h2>
                                        <h6 className="text-white ">{player.complete_name}</h6>
                                        <hr className="bg-white" />
                                        <p className="text-white ">Data de nascimento: {player.birthdate}</p>
                                        <hr className="bg-white"/>
                                        <p className="text-white ">Cidade natal: {player.city}</p>  
                                    </div>
                                </div>
                            </div>           
                        ))}
                    </div>
                </div>
        )
    }
}

export default Cards
