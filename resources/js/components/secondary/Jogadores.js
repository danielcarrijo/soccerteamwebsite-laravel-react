import React, { Component } from 'react'
import Spinner from './../Spinner'
import Cards from './Cards'
import Header from './../Header'

export class Jogadores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appear : {
                display: 'none'
            }
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                appear: {
                    display: ''
                }
            })
        }, 1000);
    }
    render() {
        const { players } = this.state
        return (
            <div height="100%" width="100%">
                {/* <Spinner /> */}
                <div style={this.state.appear} className="crac rounded">
                    <Header className="mb-3"/>
                    <div className="mt-5 container" style={{background:'white'}}>
                        <Cards url="api/players/0" title="GOLEIROS" />
                        <Cards url="api/players/1" title="LATERAIS" />
                        <Cards url="api/players/2" title="ZAGUEIROS" />
                        <Cards url="api/players/3" title="VOLANTES" />
                        <Cards url="api/players/4" title="MEIO CAMPISTAS" />
                        <Cards url="api/players/5" title="ATACANTES" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Jogadores
