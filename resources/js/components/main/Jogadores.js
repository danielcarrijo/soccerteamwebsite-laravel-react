import React from 'react'
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom'
export default function Jogadores() {
    return (
        <div className="bg-black" id="component2" >
                        <div className="container-fluid c2Style" style={div}>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring
                                from = { {opacity: 0}}
                                to = {{opacity: isVisible ? 1 : 0}}
                                config = {{delay: isVisible ? 0 : 60000, duration: 500}}

                            >
                                { props => (
                                    <div style={props} className="div_component">
                                        <h1 className="col-12 my-5 text-white titles bolder"><b>JOGADORES</b></h1>
                                        <h6 className="col-lg-5 col-md-6 col-sm-8 col-xs-12 my-5 titles justify text-white lead">A lista completa dos jogadores que formam o plantel do Leão do Sul para a temporada de 2020.</h6>
                                        <Link to="/jogadores" className="titles p-2 col-sm-8 col-md-4 form-control titles text-center bolder mr-3"  style={button} >Clique aqui</Link>
                                    </div>
                                   
                                )}
                                </Spring>
                            )}
                        </VisibilitySensor>
                            
                            
                        </div>
                    </div>
    )
}

const div = {
    overflowY:'none',
    overflowX:'none',
    minHeight:'100vh'
}

const button = {
    border: '2px white solid',
    background: 'none',
    color: 'white'
}

