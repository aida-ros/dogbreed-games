import React, {Component} from 'react'
import * as request from 'superagent'
import { connect } from 'react-redux'
import DogsList from './DogsList'

class DogsListContainer extends Component {
    componentDidMount() {
        request
          .get('https://dog.ceo/api/breeds/list/all')
          .then(response => {
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
        <DogsList/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(DogsListContainer)