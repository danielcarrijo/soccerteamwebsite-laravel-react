import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
export class Dashboard extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            user : null
        }
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        this.setState({user: JSON.parse(Cookies.get('CRAC_Daniel.user'))})
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('CRAC_Daniel.jwt')
    }

    logout(e){
        e.preventDefault()
        const { history } = this.props
        Cookies.remove('CRAC_Daniel.jwt')
        Cookies.remove('CRAC_Daniel.user')
        history.push('/')
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                <Link to="/cadastrar-jogador">Cadastrar Jogador</Link>
            </div>
        )
    }
}

export default Dashboard
