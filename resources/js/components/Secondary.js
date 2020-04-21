
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Jogadores from './secondary/Jogadores'
export class Secondary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            players: [],
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
        }, 1500);
    }
    render() {
        return (
            <BrowserRouter>
                <div style={this.state.appear}>
                    <Header />
                    <Switch>
                        <Route exact path='/jogadores' component={Jogadores}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default Secondary
