import React from 'react'
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";
import { Link } from 'react-router-dom'
export default function Jogadores() {
    return (
        <div className="bg-black" id="component3" >
                        <div className="container-fluid c3Style" style={div}>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring
                                from = { {opacity: 0}}
                                to = {{opacity: isVisible ? 1 : 0}}
                                config = {{delay: isVisible ? 0 : 60000, duration: 500}}

                            >
                                { props => (
                                    <div style={props} className="div_component">
                                        <h1 className="col-12 my-5 text-whire titles bolder"><b>TÍTULOS</b></h1>
                                        <h6 className="col-lg-5 col-md-6 col-sm-8 col-xs-12 my-5 titles justify text-white lead">Os títulos conquistados pelo Clube Recreativo e Atlético Catalano, bem como suas campanhas históricas em competições nacionais e estaduais.</h6>
                                        <Link to="/titulos" className="titles p-2 col-sm-8 col-md-3 form-control  text-center bolder ml-3" style={button} >Clique aqui</Link>
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
