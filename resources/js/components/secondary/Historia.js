import React, { Component } from 'react'
import Header from './../Header'
export class Historia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sections : []
        }
    }

    componentDidMount() {
        axios.get('api/history').then(response => {
            this.setState({sections : response.data})
        })
    }
    render() {
        const { sections } = this.state
        return (
            <div>
                <div className="crac">
                    <Header/>
                    <div className="mt-10 container" style={{background:'white'}}>
                        {sections.map(section => (
                            <div key={section.id}  className='mt-5'>
                                <span className="text-white" style={{opacity : 0}}>.</span>
                                <h4 className="bolder mb-5 ">{section.title}</h4>

                                <div className="col-lg-8 col-sm-12">
                                   {section.img != null ? <img className="img img-fluid mb-5" src={`img/historia/${section.img}`} />  : '' } 
                                </div>
                                {section.paragraph.split('\n').map(paragraph => (
                                    <p className='lead justify'>{paragraph}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Historia
