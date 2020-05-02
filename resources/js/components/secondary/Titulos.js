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
            <div>
                <div className="crac">
                    <Header/>
                    <div className="mt-10 container" style={{background:'white'}}>
                        {titulos.map(titulo => (
                            <div key={titulo.id}  className='mt-5'>
                                <span className="text-white" style={{opacity : 0}}>.</span>
                                <h4 className="bolder mb-5 ">{titulo.title}</h4>
                                <div className="col-lg-8 col-sm-12">
                                    <img className="img img-fluid mb-5" src={`img/titulo/${titulo.img}`} />
                                </div>
                                {titulo.description.split('\n').map(paragraph => (
                                    <p className='lead justify'>{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}


export default Titulos
