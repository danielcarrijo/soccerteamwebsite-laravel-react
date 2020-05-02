import React, { Component } from 'react'
import Cookies from 'js-cookie'
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

  

  
export class Jogador extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jerseys : [],
            name: '',
            complete_name: '',
            birthdate: '',
            oldjersey: '',
            jersey: '',
            city: '',
            image: '',
            position : '',
            attachment: null,
            formErrors: {
                name: '',
                complete_name: '',
                birthdate: '',
                jersey: '',
                city: '',
                image: '',
                general: ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDate = this.handleDate.bind(this)
    }

    componentDidMount() {
        this.setState({name: this.props.player.name})
        this.setState({complete_name: this.props.player.complete_name})
        this.setState({position: this.props.player.position})
        this.setState({birthdate: this.props.player.birthdate})
        this.setState({jersey: this.props.player.jersey})
        this.setState({oldjersey: this.props.player.jersey})
        this.setState({city: this.props.player.city})
        this.setState({image: this.props.player.image})
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
        if(formValid(this.state)) {
            const { name, complete_name, jersey, position, birthdate, city, image} = this.state
            axios.post(`/api/players/${this.props.id}`, {name, complete_name, jersey, position, birthdate, city, image}, { headers: {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('CRAC_Daniel.jwt')}}).then(response => {
                console.log('entrei aqui')
                location.reload()
            })
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
                formErrors.jersey = value.length > 3 || value.length == 0 ? "Escolha um número entre 0 e 999" : this.props.jerseys.includes(parseInt(value)) && parseInt(value)!= this.props.player.jersey? "Número já escolhido" : ""
                val = (value.charAt((value.length)-1) >= '0' && value.charAt((value.length)-1) <= '9' && value.length <= 3) || value.length == 0 ? value : this.state.jersey
                break   
            case "image":
                if(e.target.files[0].name.split('.').pop() == 'jpg' || e.target.files[0].name.split('.').pop() == 'png') {
                    this.setState({attachment : e.target.files[0]})
                    console.log(e.target.files[0].name.split('.').pop())
                    formErrors.image = ""
                    this.handleFile()
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
        const formErrors = this.state.formErrors
        let val = (value.charAt((value.length)-1) >= '0' && value.charAt((value.length)-1) <= '9' && value.length <= 10) || value.length == 0 ? value : this.state.birthdate
        console.log(val)
        console.log(value)
        if (((val.length == 2 || val.length == 5) && (val.length < this.state.birthdate.length)) || (value.charAt(value.length-1) == '/' && value.length < this.state.birthdate.length)) {
            val = value
        } 
        else {
            if ((val.length == 2 || val.length == 5) && (val.length > this.state.birthdate.length))val = val + '/'
        }

        try {
            formErrors.birthdate = val.charAt(2) == '/' && val.charAt(5) == '/' && val.length==10 ? "" : "Data no formato incorreto: DD/MM/YYYY"
        }catch {
            formErrors.birthdate = "Data no formato incorreto: DD/MM/YYYY"
        } 
        this.setState({formErrors, birthdate: val})
    }
    render() {
        const { formErrors } = this.state
        return (
            <div className="card-footer card-description rounded mt-1" style={div}>
                <h4 className="text-white"><input className="input-jogadores" onChange={this.handleChange} value={this.state.jersey} name="jersey" /></h4> 
                <span className="errorMessage mt-2" ><span style={{opacity: 0}}>.</span>{formErrors.jersey}</span>
                <h4 className="text-white"><input className="input-jogadores" onChange={this.handleChange} value={this.state.name} name="name" /></h4>
                <span className="errorMessage mt-2" ><span style={{opacity: 0}}>.</span>{formErrors.name}</span>
                <h6 className="text-white "><input className="input-jogadores" onChange={this.handleChange} value={this.state.complete_name} name="complete_name"/></h6>
                <span className="errorMessage mt-2" ><span style={{opacity: 0}}>.</span>{formErrors.complete_name}</span>
                <hr className="bg-white" />
                <p className="text-white ">Data de nascimento: <input className="input-jogadores" onChange={this.handleDate} value={this.state.birthdate} name="birthdate" /></p>
                <span className="errorMessage mt-2" ><span style={{opacity: 0}}>.</span>{formErrors.birthdate}</span>
                <hr className="bg-white"/>
                <p className="text-white ">Cidade natal: <input className="input-jogadores" onChange={this.handleChange} value={this.state.city} name="city" /></p>
                <span className="errorMessage mt-2" ><span style={{opacity: 0}}>.</span>{formErrors.city}</span> 
                <button className="btn btn-light" onClick={this.handleSubmit}>Salvar</button>
            </div>
        )
    }
}

const position = {
    position : 'absolute'
}

const div = {
    position : 'relative'
}

export default Jogador
