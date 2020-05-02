import React, { Component } from 'react'
import Spinner from './../Spinner'
import Cards from './Cards'
import Sidebar from './Sidebar'
export class EditJogadores extends Component {
    constructor(props) {
        super(props)
        this.state = {
            appear : {
                display: 'none'
            },
            spinner : {
                display:''
            }
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                appear: {
                    display: '',
                }
            })
            this.setState({spinner: {display : 'none'}})
        }, 3000);
    }
    
    render() {
        return (
            <div height="100%" width="100%">
                <div className="spinner" style={this.state.spinner}>
                <Spinner />
                </div>
                <div style={this.state.appear} className="rounded">
                    <div className="container-fluid">
                        <div className="row full-height">
                            <Sidebar/>
                            <div className="full-height col-lg-10 col-sm-12 border-left">
                                <div className='container ml-4'>
                                    Para trocar uma imagem, clique sobre a mesma, e suba uma nova imagem nos formatos .png ou .jpg
                                </div>
                                <Cards url="api/players/0" title="GOLEIROS" />
                                <Cards url="api/players/1" title="LATERAIS" />
                                <Cards url="api/players/2" title="ZAGUEIROS" />
                                <Cards url="api/players/3" title="VOLANTES" />
                                <Cards url="api/players/4" title="MEIO CAMPISTAS" />
                                <Cards url="api/players/5" title="ATACANTES" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditJogadores
