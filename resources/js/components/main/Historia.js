import React from 'react'
import { Spring } from 'react-spring/renderprops';
import { Link } from 'react-router-dom'
import VisibilitySensor from "react-visibility-sensor";
export default function Jogadores() {
    return (
        <div className="bg-black" id="component4" >
                        <div className="container-fluid c4Style" style={div}>
                        <VisibilitySensor>
                            {({ isVisible }) => (
                                <Spring
                                from = { {opacity: 0}}
                                to = {{opacity: isVisible ? 1 : 0}}
                                config = {{delay: isVisible ? 0 : 60000, duration: 500}}

                            >
                                { props => (
                                    <div style={props} className="div_component mt-3">
                                        <h1 className="col-12 my-5 text-whire titles bolder"><b>HISTÓRIA</b></h1>
                                        <h6 className="col-lg-5 col-md-6 col-sm-8 col-xs-12 mb-5 titles justify text-white lead">Confira um pouco da história do CRAC, único bicampeão do interior, e clube mais antigo da história de Goiás.</h6>
                                        <Link className="ml-4 p-2 col-sm-4 col-xs-4 col-md-2 bolder" style={button} to = "/historia">Clique aqui</Link>
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
