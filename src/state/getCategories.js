import axios from 'axios';

  const LOAD_CATEGEGORIES = "LOAD_CATEGEGORIES"
  const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS"

  
  const defaultState = {
    data: [],
  }

  export const CategoryReducer = (state = defaultState, action) => {
    switch(action.type) {

      case LOAD_DATA_SUCCESS:
        return {
          data: action.payload
        }

      default:
        return state
    }
  }

  export const getCategory = (str) => {

    return async dispatch => {
      try { 
         dispatch({type: LOAD_CATEGEGORIES})
        let url = `https://api.giphy.com/v1/gifs/search?api_key=8vL2ThDZSHYWiWxdHohoyOhYjpKZz6kw&q=${str}&limit=25&offset=0&rating=g&lang=en`

        let response = await axios.get(url)
        
         dispatch({type: LOAD_DATA_SUCCESS, payload: response.data.data})

      } catch (err) {
         console.log("error")
      }
  }
}