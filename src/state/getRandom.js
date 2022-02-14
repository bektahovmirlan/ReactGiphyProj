import axios from 'axios';

  const LOAD_RANDOM = "LOAD_RANDOM"
  const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS"

  
  const defaultState = {
    data: [],
  }

  export const RandomReducer = (state = defaultState, action) => {
    switch(action.type) {

      case LOAD_DATA_SUCCESS:
        return {
          data: action.payload
        }

      default:
        return state
    }
  }

  export const getRandom = () => {

    return async dispatch => {
      try { 
         dispatch({type: LOAD_RANDOM})
        let url = "https://api.giphy.com/v1/gifs/random?api_key=8vL2ThDZSHYWiWxdHohoyOhYjpKZz6kw&tag=burrito&rating=g"

        let response = await axios.get(url)
        
         dispatch({type: LOAD_DATA_SUCCESS, payload: [response.data.data]})

      } catch (err) {
         console.log("error")
      }
  }
}