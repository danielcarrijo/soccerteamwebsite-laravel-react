import React, { Component } from 'react'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
export class Sidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user : null,
            marginTop : null
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        let user = JSON.parse(Cookies.get('CRAC_Daniel.user'))
        this.setState({user: user})
        this.setState({marginTop: 0})
        window.addEventListener('scroll', this.handleScroll)

    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }
    handleScroll(e) {
        this.setState({marginTop: window.pageYOffset})
    }
    render() {
        const {style} = this.state
        return (
            <nav className="col-md-2 d-none bg-primary d-lg-block navigation sidebar-padding  full-height" style={{marginTop : 
                this.state.marginTop
            }}
            >
            <div className="sidebar-sticky mt-3">
                <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link text-white active" to="/dashboard">
                    Dashboard
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/cadastrar-jogador">
                    Cadastrar jogador <span className="sr-only"></span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link text-white" to="/editar-jogador">
                    <span data-feather="file"></span>
                    Editar jogador 
                    </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="{{route('welcome.filter', ['topic' => 'Health'])}}">
                    Health
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="{{route('welcome.filter', ['topic' => 'Programming'])}}">
                    Programming
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="{{route('welcome.filter', ['topic' => 'Games'])}}">
                    Games
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="{{route('welcome.filter', ['topic' => 'Economy'])}}">
                    Economy
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="{{route('welcome.filter', ['topic' => 'Others'])}}">
                    Others
                    </a>
                </li>
                </ul>
            </div>
         </nav>
        )
    }
}

export default Sidebar
