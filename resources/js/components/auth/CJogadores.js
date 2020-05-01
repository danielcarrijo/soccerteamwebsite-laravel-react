import React, { Component } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import Sidebar from './Sidebar'
const formValid = ({formErrors, ...rest}) => {
  
    let valid = true;
    Object.values(formErrors).forEach(val => { 
      val.length > 0 && (valid = false)
    });
  
    Object.values(rest).forEach(val => {
      console.log(val)
      val === '' && (valid = false);
    });
    return valid; 
  }

export class CJogadores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jerseys : [],
            name: '',
            complete_name: '',
            birthdate: '',
            position : '0',
            jersey: '',
            city: '',
            image: '',
            attachment: null,
            formErrors: {
                name: '',
                complete_name: '',
                birthdate: '',
                position : '',
                jersey: '',
                city: '',
                image: '',
                general: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('api/jerseys').then(response => {
            this.setState({jerseys : response.data})
            console.log(this.state.jerseys)
        })
       
    }
    handleSubmit(e) {   
        e.preventDefault()
        console.log(formValid(this.state))
        if (this.state.attachment != null && formValid(this.state)) {
            var formData = new FormData();
            formData.append("image", this.state.attachment)
            let headers = {'Content-Type': 'multipart/form-data'}
                axios.post("/api/upload-file", formData, {headers}).then(response => {
                    let image = response.data
                    const { name, complete_name, jersey, position, birthdate, city} = this.state
                    axios.post("/api/players ", {name, complete_name, jersey, position, birthdate, city, image}, { headers: {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('CRAC_Daniel.jwt')}}).then(response => {
                        console.log('entrei aqui')
                        const { history } = this.props
                        history.push('/')
                    })
                })
            
        } else {
            console.log('deu ruim')
            const { formErrors } = this.state
            if (this.state.attachment == null) {
                formErrors.image = "Adicione uma imagem"
                this.setState({formErrors})
            }else {
                formErrors.general = "Preencha todos os campos"
                this.setState({formErrors})
            }
        }       
    }
    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        const { formErrors } = this.state
        let val = value
        formErrors.general =""
        switch (name) {
            case "jersey":
                formErrors.jersey = value.length > 3 || value.length == 0 ? "Escolha um número entre 0 e 999" : this.state.jerseys.includes(parseInt(value)) ? "Número já escolhido" : ""
                val = (value.charAt((value.length)-1) >= '0' && value.charAt((value.length)-1) <= '9' && value.length <= 3) || value.length == 0 ? value : this.state.jersey
                break   
            case "image":
                if(e.target.files[0].name.split('.').pop() == 'jpg' || e.target.files[0].name.split('.').pop() == 'png') {
                    this.setState({attachment : e.target.files[0]})
                    console.log(e.target.files[0].name.split('.').pop())
                    formErrors.image = ""
                }
                else {
                    formErrors.image = "Arquivo deve conter extensão .jpg ou .png"
                }
                
                break 
            case "name":
                formErrors.name = value.length == 0 ? "Complete esse campo" : ''
                break;
            case "complete_name" : 
                formErrors.complete_name = value.length == 0 ? "Complete esse campo" : ''
                break
            case "city" : 
                formErrors.city = value.length == 0 ? "Complete esse campo" : ''
                break
            default:
                break;
        } 
        this.setState({formErrors: formErrors, [name]: val})
    }
    handleDate(e) {
        e.preventDefault()
        const { value } = e.target
        let val = (value.charAt((value.length)-1) >= '0' && value.charAt((value.length)-1) <= '9' && value.length <= 10) || value.length == 0 ? value : this.state.birthdate
        console.log(val)
        console.log(value)
        if (((val.length == 2 || val.length == 5) && (val.length < this.state.birthdate.length)) || (value.charAt(value.length-1) == '/' && value.length < this.state.birthdate.length)) {
            val = value
        } 
        else {
            if ((val.length == 2 || val.length == 5) && (val.length > this.state.birthdate.length))val = val + '/'
        }
        
        this.setState({birthdate: val})
        console.log('d')
    }
    render() {
        const { formErrors } = this.state
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <div className="full-height col-lg-8 col-sm-12 mt-1 border-left mt-2">
                        <div className="card mt-4">
                            <div className="card-header">
                                <div className="card-title">Cadastrar novo jogador</div>
                            </div>
                            <div className="card-body">
                                <form autoComplete="off" onSubmit={this.handleSubmit}>
                                    <div className="form-group row">
                                        <label htmlFor="name">Nome</label>
                                        <input 
                                            onChange={this.handleChange}
                                            name="name"
                                            type="text"
                                            placeholder="Nome do jogador"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name">Nome Completo</label>
                                        <input 
                                            onChange={this.handleChange}
                                            name="complete_name"
                                            type="text"
                                            placeholder="Nome completo do jogador"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="position">Posição</label>
                                        <select 
                                            onChange={this.handleChange}
                                            name="position"
                                            type="text"
                                            className="form-control"
                                        >
                                            <option value="0">Goleiro</option>
                                            <option value="1">Lateral</option>
                                            <option value="2">Zagueiro</option>
                                            <option value="3">Volante</option>
                                            <option value="4">Meio-Campista</option>
                                            <option value="5">Atacante</option>
                                        </select>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="jersey">Número da Camisa</label>
                                        <input 
                                            onChange={this.handleChange}
                                            value={this.state.jersey}
                                            name="jersey"
                                            type="text"
                                            className="form-control"
                                        />
                                        {(formErrors.jersey.length > 0) && (
                                            <span className='errorMessage'>{formErrors.jersey}</span>
                                        )}
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="birthdate">Data de nascimento</label>
                                        <input 
                                            onChange = {this.handleDate}
                                            name="birthdate"
                                            type="text"
                                            placeholder="XX/YY/ZZZZ"
                                            value={this.state.birthdate}
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="city">Cidade</label>
                                        <input 
                                            onChange={this.handleChange}
                                            name="city"
                                            type="text"
                                            placeholder="Nome completo do jogador"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name">Imagem</label>
                                        <input 
                                            onChange={this.handleChange}
                                            name="image"
                                            type="file"
                                            className="form-control"
                                        />
                                        {(formErrors.image.length > 0) && (
                                            <span className='errorMessage'>{formErrors.image}</span>
                                        )}
                                    </div>
                                    <span className="errorMessage">{formErrors.general}</span><br /> 
                                    <button type="submit" className="btn btn-primary">Criar Jogador</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CJogadores
