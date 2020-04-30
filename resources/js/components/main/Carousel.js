import React, { Component } from 'react'
import { Spring } from 'react-spring/renderprops';import Imagem1 from './../../img/Imagem1.jpg'
export class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = { imageStatus: false };
    }


    render() {
        return (
            <div style={div} id="component1">
                <img src={this.props.img} className="img img-fluid" id="pic1"/>
                <div  className="caption_pic1 d-none d-md-block mt-3 mt-lg-2">
                <Spring
                    from = { {marginTop: -1500}}
                    to = {{marginTop: 0}}
                    config = {{delay: 500, duration: 1000}}

                >
                    { props => (
                        <h1 className="title" style={props}>CLUBE RECREATIVO ATLÉTICO CATALANO</h1>
                    )}
                    </Spring>
                </div>
            </div>
        )
    }
}

export default Carousel

const div = {
    overflowX : 'hidden',
    minHeight: '100%'
}

