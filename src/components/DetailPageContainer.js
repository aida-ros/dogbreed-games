import React, { Component } from 'react'

export default class DetailPageContainer extends Component {
    state = { images: null }
    componentDidMount() {
        console.log(response)
        const breed = this.props.match.params.breed
        request
          .get(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
          .then(response => this.updateImages(response.body.message))
          .catch(console.error)
      }
      updateImages(images) {
        this.setState({
          images: images
        })
    }
  
  
    render() {
    
        return (
        <div>
             This page will show images of a specific dog { this.props.match.params.breed }
              <DogBreedImages images={ this.state.images } />
          
        </div>
      )
  }

      
    
   
  
}



  

  
  
 