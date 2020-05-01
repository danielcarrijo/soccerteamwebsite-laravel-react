import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'
import Sidebar from './Sidebar'
export class Dashboard extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            user : null,
            mg: {
                marginTop: null
            }
        }
        this.logout = this.logout.bind(this)
    }
    componentDidMount() {
        let user = JSON.parse(Cookies.get('CRAC_Daniel.user'))
        this.setState({user: user})
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
            <div className="container-fluid">
                <div className="row full-height">
                    <Sidebar/>
                    <div className="full-height col-lg-8 col-sm-12 mt-1 border-left border-right mt-2">
                        <div className="mt-3">
                            <button className="btn btn-primary" onClick={this.logout}>Logout</button>
                            <Link to="/cadastrar-jogador">Cadastrar Jogador</Link>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                            <p>sdsdsdsdsdsdsdsdsdsd</p>
                        </div>               
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard
