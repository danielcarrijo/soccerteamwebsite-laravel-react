import Loader from 'react-loader-spinner'
import React from 'react'
 export default class Spinner extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="ThreeDots"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
     );
    }
 }