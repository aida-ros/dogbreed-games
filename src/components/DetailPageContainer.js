import React, { Component } from 'react'
import DetailPage from './DetailPage'
import * as request from 'superagent'
import { connect } from 'react-redux'

class DetailPageContainer extends Component {
    state = { images: null }
    componentDidMount() {
       
        const breed = this.props.match.params.breed
        request
          .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
          .then(response => {
            this.props.dispatch({
              type: 'SHOW_DOG_IMAGES',
              payload: response.body.message})
          })
            
          .catch(console.error)
          
          
    }

    render() {
    
        return (
        <div>
             This page will show images of a specific dog { this.props.match.params.breed }
              <DetailPage dogImages={ this.props.dogImages } /> 
          
        </div>
      )}
}



const mapStateToProps = (state) => {
  console.log(state.dogBreeds)  
  return {
      dogBreeds: state.dogBreeds,
      dogImages: state.dogImages
    }
}

export default connect(mapStateToProps)(DetailPageContainer)

  
  
 