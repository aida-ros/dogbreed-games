import React, {Component} from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import DogsList from './DogsList'

class DogsListContainer extends Component {
    componentDidMount() {
        request
          .get('https://dog.ceo/api/breeds/list/all')
          .then(response => {
            console.log("HI",response)
            const dogData = Object.keys(response.body.message)
                this.props.dispatch({
                type: 'SHOW_DOG_BREED',
                payload: dogData
              })
            })
          .catch(console.error)
      }
    

    render() {
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>        
         <DogsList dogBreeds = {this.props.dogBreeds}/> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.dogBreeds)  
  return {
      dogBreeds: state.dogBreeds,
      dogImages: state.dogImages
    }
}

export default connect(mapStateToProps)(DogsListContainer)