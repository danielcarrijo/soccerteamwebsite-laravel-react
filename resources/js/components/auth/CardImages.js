import React, { Component } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom'

export class CardImages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null, 
            attachment: null
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleFile = this.handleFile.bind(this)
        
    }

    handleClick(e) {
        this.inputElement.click();
    }

    handleFile(e) {
        if(e.target.files[0] != null && (e.target.files[0].name.split('.').pop() == 'jpg' || e.target.files[0].name.split('.').pop() == 'png') ) {
            var formData = new FormData();
            formData.append("image", e.target.files[0])
            let headers = {'Content-Type': 'multipart/form-data'}
            axios.post("/api/upload-file", formData, {headers}).then(response =>{
                console.log(response.data)
                let img = response.data
                console.log(img)
                axios.post(`/api/playersPicture/${this.props.id}`, {img}, { headers: {Accept: 'application/json', Authorization: "Bearer " +  Cookies.get('CRAC_Daniel.jwt')}}).then(response => {
                    console.log('entrei aqui')
                    location.reload()
                })
            })
        }
        
    }
    render() {
        return (
            <div className="card-body">
                <img src={`img/${this.props.player.img}`} className="img img-fluid" onClick={this.handleClick} />
                <input ref={input => this.inputElement = input} style={invisible} type="file" name="image" onChange={this.handleFile}/>
            </div>
        )
    }
}

const invisible = {
    display: 'none'
}

export default CardImages
