import React, { Component } from 'react'
import axios from 'axios'
import Header from './../Header'

export class Titulos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            titulos : []
        }
    }

    componentDidMount() {
        axios.get('api/titles').then(response => {
            this.setState({titulos : response.data})
        })
    }
    render() {
        const { titulos } = this.state
        return (
            <div height="100%" width="100%">
                <div className="crac">
                    <Header className="mb-3"/>
                    <div className="mt-10 container" style={{background:'white'}}>
                        {titulos.map(titulo => (
                            <div key={titulo.id}  className='my-5'>
                                <span className="my-1 text-white" style={{opacity : 0}}>.</span>
                                <h4 className="bolder mb-5 ">{titulo.title}</h4>
                                <div className="col-8">
                                    <img className="img img-fluid mb-5" src={`img/${titulo.img}`} />
                                </div>
                                <p className='lead justify'>{titulo.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Titulos
