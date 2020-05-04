import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import Confirmation from './../Confirmation'
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

export class Section extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            title : '',
            paragraph : '',
            image : '',
            formErrors :  {
                title : '',
                paragraph : '',
                image : ''
            }
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        this.setState({
            title : this.props.section.title,
            paragraph : this.props.section.paragraph,
            image : this.props.section.img
        })
    }
    handleFile(e) {
            e.preventDefault()
            if(e.target.files[0] != null && (e.target.files[0].name.split('.').pop() == 'jpg' || e.target.files[0].name.split('.').pop() == 'png') ) {
                var formData = new FormData();
                console.log(this.state.image)
                if(this.state.image!=null) {
                    formData.append("image", e.target.files[0], this.state.image)
                    let headers = {'Content-Type': 'multipart/form-data'}
                    let name = this.state.image
                    axios.post("/api/history-updatePicture", formData , {headers}).then(response =>{
                        location.reload()
                    })
                }
                else {
                    formData.append("image", e.target.files[0])
                    let headers = {'Content-Type': 'multipart/form-data'}
                    let name = this.state.image
                    axios.post("/api/history-picture", formData , {headers}).then(response =>{
                        location.reload()
                    })
                }
                
            }
    }

    handleClick(e) {
        e.preventDefault()
        this.inputElement.click()
    }
    handleDelete(e) {
        e.preventDefault()
        axios.delete(`api/history/${this.props.section.id}`, { headers: {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('CRAC_Daniel.jwt')}}).then(response => {
            location.reload()
        })
    }

    handleChange(e) {
        e.preventDefault()
        const { name, value } =  e.target
        const formErrors = this.state.formErrors
        switch (name) {
            case "title":
                formErrors.title = (/\S/.test(value)) ? "" : "Escreva um título maior"
                break;
            case "paragraph" : 
                formErrors.paragraph = (/\S/.test(value)) ? "" : "Escreva uma seção maior"
            default:
                break;
        }
        this.setState({[name] : value})
    }
    
    handleSubmit(e) {
        e.preventDefault()
        if(formValid(this.state)) {
            const { title, paragraph, image } = this.state
            let img = image
            axios.post(`api/history/${this.props.section.id}`, {title, paragraph, img}, {headers  : {Accept :'application/json', Authorization: "Bearer " +  Cookies.get('CRAC_Daniel.jwt') }}).then(response => {
                location.reload()
            })
        }
    }
    render() {
        const { formErrors } = this.state
        return (
            <div key={this.props.section.id} className="mt-5">
                <Confirmation triggerDelete = {this.handleDelete}/>
                <span className="text-white" style={{opacity : 0}}>.</span>
                <h4 className="bolder mb-5 ">
                    <input 
                        value = {this.state.title}
                        style = {input}
                        name = "title"
                        onChange = {this.handleChange}
                        type = "text"
                    />
                    <span className="errorMessage">{formErrors.title}</span>
                </h4>
                <div className="row justify-content-center">
                    <div className="col-lg-8  col-sm-12">
                        <img className="img img-fluid mb-5" src={`img/historia/${this.props.section.img}`} onClick={this.handleClick}/>
                        <input ref={input => this.inputElement = input} style={invisible} type="file" name="image" onChange={this.handleFile}/>
                    </div>
                </div>
                <textarea 
                        className='lead justify' 
                        style = {input}
                        name="paragraph"
                        onChange = {this.handleChange}
                        value = {
                            this.state.paragraph
                        }
                        rows = {parseInt((this.props.section.paragraph.length)/100) + 1}
                ></textarea>
                    <span className="errorMessage">{formErrors.paragraph}</span>

                <button onClick={this.handleSubmit} className="btn btn-primary">Salvar</button>
            </div>
        )
    }
}


const input = {
    border : 'none',
    width  : '100%',
    overflow: 'hidden'

}

const invisible = {
    opacity : 0
}

export default Section
