import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login'
import Jogadores from './secondary/Jogadores'
import Example from './Example'
import Secondary from './Secondary'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
class App extends Component {
    render () {
        return (
            <BrowserRouter >
                <div style={bg}>
                <Switch>
                    <Route exact path='/' component={Example} />
                    <Route  path='/login' component={Login} />
                    <Route exact path='/jogadores' component={Jogadores}/>
                    <Route  path='/:name' component={Secondary} />

                </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const bg = {
    background:'#fff'
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
