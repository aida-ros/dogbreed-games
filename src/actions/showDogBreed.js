import DogsListContainer  from '../components/DogsListContainer'



showDogBreed = (dogData) => {
    this.props.dispatch({
      type: 'SHOW_DOG_BREED',
      payload: dogData
    })
  }