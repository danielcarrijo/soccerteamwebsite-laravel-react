import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './../Sidebar'
import Section from './Section'
export class EditarSecao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections : []
        }
    }

    componentDidMount() {
        axios.get('api/history').then(response => {
            this.setState({sections : response.data})
        })
    }
    render() {
        const { sections } = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <div className="full-height col-lg-10 col-sm-12 mt-1 border-left mt-2">
                        {sections.map(section => (
                            <div key = {section.id}>
                                <Section section={section}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}



export default EditarSecao
