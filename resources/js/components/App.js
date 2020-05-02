import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie'
import Login from './Login'
import Jogadores from './secondary/Jogadores'
import Titulos from './secondary/Titulos'
import CJogadores from './auth/CJogadores'
import Example from './Example'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './auth/Dashboard';
import EditJogadores from './auth/EditJogadores';
import CadastrarTitulo from './auth/titulo/CadastrarTitulo';
import EditarTitulos from './auth/titulo/EditarTitulos';
 
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
            <BrowserRouter>
                <div style={bg}>
                <Switch>
                    <Route exact path='/' component={Example} />
                    <LoginRoute  path='/login' component={Login} />
                    <Route  path='/jogadores' component={Jogadores}/>
                    <Route  path='/titulos' component={Titulos}/>
                    <PrivateRoute path="/dashboard" component = {Dashboard} />
                    <PrivateRoute path="/cadastrar-jogador" component = {CJogadores} />
                    <PrivateRoute path="/editar-jogador" component = {EditJogadores} />
                    <PrivateRoute path="/cadastrar-titulo" component = {CadastrarTitulo} />
                    <PrivateRoute path="/editar-titulos" component = {EditarTitulos} />
                </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const bg = {
    background:'#fff',
    height: '100%'
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
