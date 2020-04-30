import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <nav className="navbar fixed-top navbar-inverse navbar-expand-md navbar-dark p-0 bg-blue-transition" id="menu1">
        <div className="container">
          <a className="navbar-brand h1 mb0" href="/"><img src="img/icone.png" width="50px" style={img}/> </a>
          <button id="min"   className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSite">
              <span className="navbar-toggler-icon navbar-light"></span>
            </button>
      
            <div className="collapse navbar-collapse" id="navbarSite">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item mr-3">
                <Link to="/" className="text-white" >HOME</Link>
                </li>
                
              </ul>
            </div>
          </div>
      </nav>
    )
  }
}

export default Header

const img = {
  marginLeft: '0px'
}

const letter =  {
  fontSize:'12pt'
}

