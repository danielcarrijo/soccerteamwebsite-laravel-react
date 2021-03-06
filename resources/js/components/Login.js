import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({formErrors, ...rest}) => {

let valid = true;
Object.values(formErrors).forEach(val => { 
    val.length > 0 && (valid = false)
});

Object.values(rest).forEach(val => {
    val === null && (valid = false);
});
return valid; 
}
  

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '', 
            password: '',
            formErrors : {
                email: '',
                password: ''
            },
            error : '',
            text: 'Login'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        if(Cookies.get('CRAC_Daniel.jwt') != null) {
            let user = JSON.parse(Cookies.get('CRAC_Daniel.user'))
            console.log(user)
            console.log(user.name)
            console.log('entrei')
            this.setState({text: user.name})
        }
        else {
            this.setState({text: 'Login'})

        }
    }

    logout(){
        const { history } = this.props
        Cookies.remove('CRAC_Daniel.jwt')
        Cookies.remove('CRAC_Daniel.user')
        history.push('/')
    }

    handleSubmit(e) {
        e.preventDefault()
        const {email, password} = this.state
        console.log(email, password)
        if(formValid(this.state)) {
            const error = this.state.error
            axios.post('api/login', {email, password}).then(response => {
                let user = response.data.user

                Cookies.set('CRAC_Daniel.user', JSON.stringify(user)) 
                Cookies.set('CRAC_Daniel.jwt', response.data.token)
                axios.defaults.headers.common['Content-Type'] = 'application/json'
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookies.get('CRAC_Daniel.jwt')
                if (Cookies.get('CRAC_Daniel.jwt') != null) {
                    const { from } = this.props.location.state || {from: {pathname: '/dashboard'}}
                    const { history } = this.props
                    history.push(from.pathname)
                }
            }).catch(err => {
                console.log(err)
            });
        }
    }
    handleChange(e) {
        e.preventDefault();
        const {name, value} = e.target
        const formErrors = this.state.formErrors
        switch(name) {
            case "email":
                formErrors.email = emailRegex.test(value) ? "" : "Escreva o email no padrão correto"
                break;
            case "password":
                formErrors.password = value.length < 6 ? "Senha muito curta" : ""
                break;
        }
        this.setState({ formErrors, [name]:value })
        console.log(this.state)
    }
    render() {
        const { formErrors } = this.state;
        const { text } = this.state;
        return (
            <div className="container full-height">
                <div className="row justify-content-center mt-5 full-height">
                    <div className="col-md-8 full-height">
                        <div className="card full-height" >
                            <div className="card-header">
                                <div className="card-title">Login</div>
                            </div>
                            <div className="card-body">
                                <form autoComplete="off">
                                    <div className="form-group row ml-0">
                                        <label htmlFor="email">Email</label>
                                        <input 
                                            className="form-control"
                                            onChange = {this.handleChange}
                                            name = "email"
                                            type = "text"
                                            placeholder="Email"
                                        />
                                        <span>{formErrors.email}</span>
                                    </div>
                                    <div className="form-group row ml-0">
                                        <label htmlFor="password">Senha</label>
                                        <input 
                                            className="form-control"
                                            onChange = {this.handleChange}
                                            name = "password"
                                            type = "password"
                                            placeholder="Senha"
                                        />
                                        <span>{formErrors.password}</span>
                                    </div>
                                    <button
                                        onClick={this.handleSubmit}
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </button>
                                    <div className="form-group row ml-0 mt-2">
                                        <span>{text}</span>
                                    </div>
                                    <div className="form-group row ml-0 mt-2">
                                    <button
                                        onClick={this.logout}
                                        className="btn btn-primary"
                                    >
                                        Logout
                                    </button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Login
