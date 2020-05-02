import React, { Component } from 'react'
import axios from 'axios'
import Sidebar from './../Sidebar'
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

export class CadastrarTitulo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            image: '',
            attachment: null,
            formErrors : {
                title : '',
                description : '',
                image: '',
                general : ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        const { title, description, image } = this.state
        if(formValid(this.state)) {
            axios.post('api/titles', {title, description, image}, { headers: {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('CRAC_Daniel.jwt')}}).then(response => {
                const { history } = this.props
                history.push('/titulos')
            })
        }
        else {
            const { title, description} = this.state
            const formErrors  = this.state.formErrors
            formErrors.title = title == '' || title == "" ? "Escreva um título maior" : ""
            formErrors.description = description == '' || description == "" ? "Escreva uma descrição maior" : ""
            this.setState({formErrors})
        }
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } = e.target
        const { formErrors } = this.state
        switch (name) {
            case "title":
                formErrors.title = (/\S/.test(value)) ? "" :  "Escreva um título maior"
                break
            case "description":
                formErrors.description = (/\S/.test(value)) ? "" :  "Escreva uma descrição maior"
                break
            case "image": 
                if(e.target.files[0]!=null) {
                    if(e.target.files[0].name.split('.').pop() == 'jpg' || e.target.files[0].name.split('.').pop() == 'png') {
                        formErrors.image = ""
                        this.setState({attachment : e.target.files[0]})
                        this.handleFile(e.target.files[0])
                    }else {
                        formErrors.image="Imagem com extensão equivocada"
                    }
                }   
                else {
                    formErrors.image = ""
                }
            default:
                break;
        } 
        this.setState({formErrors, [name]:value})
    }

    handleFile(img) {
        if(img) {
            var formData = new FormData();
            formData.append("image", img)
            let headers = {'Content-Type': 'multipart/form-data'}
            axios.post('api/title-picture', formData, {headers}).then(response => {
                this.setState({image : response.data})
            })
        }
        
    }
    render() {
        const formErrors = this.state.formErrors
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar/>
                    <div className="full-height col-lg-8 col-sm-12 mt-1 border-left mt-2">
                        <div className="card mt-4">
                            <div className="card-header">
                                <div className ="card-title">Cadastrar Título</div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="title">Título</label>
                                            <input 
                                                className={`form-control ${formErrors.title.length > 0 ? "border_red" : ""}`} 
                                                name = "title"
                                                type="text"
                                                onChange={this.handleChange}
                                                placeholder="Escreva o título e ano da Conquista (Ex: Campeonato Goiano de 2004)"
                                            />
                                            <span className="errorMessage">{formErrors.title}</span> 
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <label htmlFor="desription">Descrição</label>
                                            <textarea 
                                                 className={`form-control ${formErrors.description.length > 0 ? "border_red" : ""}`}  
                                                name = "description"
                                                onChange={this.handleChange}
                                                rows = "8"
                                            ></textarea>
                                            <span className="errorMessage">{formErrors.description}</span> 
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-12">
                                            <input  
                                                name = "image"
                                                onChange={this.handleChange}
                                                type="file"
                                            />
                                            <span className="errorMessage">{formErrors.image}</span> 
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Cadastrar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CadastrarTitulo
