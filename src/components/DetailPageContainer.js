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
             <h2>Here are the { this.props.match.params.breed }!</h2>
              <DetailPage dogImages={ this.props.dogImages } /> 
        </div>
      )}
}

const mapStateToProps = (state) => {
  return {
      dogBreeds: state.dogBreeds,
      dogImages: state.dogImages
    }
}

export default connect(mapStateToProps)(DetailPageContainer)