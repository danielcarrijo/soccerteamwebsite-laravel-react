import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './../Sidebar'
import Titulo from './Titulo'
export class EditarTitulo extends Component {
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
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <div className="full-height col-lg-10 col-sm-12 mt-1 border-left mt-2">
                        {titulos.map(titulo => (
                            <div key = {titulo.id}>
                                <Titulo titulo={titulo}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}



export default EditarTitulo
