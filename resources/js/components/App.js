import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import Login from './Login'
import Jogadores from './secondary/Jogadores'
import CJogadores from './auth/CJogadores'
import Example from './Example'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './auth/Dashboard';
 
const user =  () => {
    if (Cookies.get('CRAC_Daniel.jwt') != null) {
        console.log('entrei')
        return true
    } else{
        return false
    }
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        user() == true ? <Component {...props}/> : <Redirect to={{
            pathname : '/login',
            state: {from : props.location}
        }} />
    )}/>
) 

const LoginRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        user() == true ? <Redirect to='/dashboard' /> : <Component {...props}/>
    )}/>
) 


class App extends Component {
    constructor() {
        super()
        this.state = {
            admin: false
        }
    }
    
    render () {
        return (
            <BrowserRouter >
                <div style={bg}>
                <Switch>
                    <Route exact path='/' component={Example} />
                    <LoginRoute  path='/login' component={Login} />
                    <Route  path='/jogadores' component={Jogadores}/>
                    <PrivateRoute path="/dashboard" component = {Dashboard} />
                    <PrivateRoute path="/cadastrar-jogador" component = {CJogadores} />
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
