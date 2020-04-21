import React, { Component } from 'react'
import Imagem1 from './../../img/Imagem1.jpg'
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
                    <h1 className="title">CLUBE RECREATIVO ATLÉTICO CATALANO</h1>
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