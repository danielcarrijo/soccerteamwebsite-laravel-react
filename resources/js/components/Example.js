import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Carousel from './main/Carousel'
import Header from './main/Header'
import Jogadores from './main/Jogadores'
import Titulos from './main/Titulos'
import Historia from './main/Historia'
import Imagem1 from './../img/Imagem1.jpg'
export class Example extends Component {
    constructor(props) {
        super(props),
        this.state = {
            user : {
                name: '',
                email: '',
                
            },
            appear: {
                display: 'none'
            },
            background: '',
            is_user : 0
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount () {
        window.addEventListener('scroll', this.handleScroll)
        setTimeout(() => {
            this.setState({
                appear: {
                    display: ''
                }
            })
        }, 340);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll(e) {
        if (window.pageYOffset > 10) {
            if(this.state.background == '' || this.state.background == "remove") {
                this.setState({background : "bg-blue-transition"})
            } 
        }
        else {
            if(this.state.background == "bg-blue-transition") {
                this.setState({background : 'remove'})
            }
        }
        
    }
    render() {
        return (
            <div style={this.state.appear}> 
                <Header class={this.state.background} />
                <Carousel img={Imagem1}/>
                <Jogadores />
                <Titulos />
                <Historia />

            </div>
        )
    }
}

export default Example
