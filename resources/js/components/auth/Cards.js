import React, { Component } from 'react'
import axios from 'axios'
import Jogador from './Jogador'
import CardImages from './CardImages'

export class Cards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players : [],
            jerseys  : []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateJersey = this.updateJersey.bind(this)
    } 
    componentDidMount() {
        axios.get(this.props.url).then(response => {this.setState({players: response.data})})
        axios.get('api/jerseys').then(response => {
            this.setState({jerseys : response.data})
            console.log(this.state.jerseys)
        })
    }

    updateJersey(a,b) {
        jerseys.pop(a)
        jerseys.push(b)
    }

    handleChange(e) {
        e.preventDefault()
    }

    handleSubmit(e) {
        e.preventDefault()
    }
    render() {
        const { players } = this.state
        return (
            <div className="container mb-5">
                    <div className="row">
                        <div className="bg-primary  form-control position-title text-white bolder mt-5">{this.props.title}</div>
                        {players.map(player => (
                            <div className="card col-lg-4 col-xs-12 col-md-6 border-0" key={player.id}>
                                <CardImages id={player.id} player={player} />
                                <div className="container">
                                    <Jogador player={player} id={player.id} jerseys = {this.state.jerseys} updateJersey = {this.updateJersey.Jersey}/>
                                </div>
                            </div>           
                        ))}
                    </div>
                </div>
        )
    }
}

export default Cards
