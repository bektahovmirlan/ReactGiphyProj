import axios from 'axios';

  const LOAD_RANDOM = "LOAD_RANDOM"

  export const RandomReducer = (state = {}, action) => {
    switch(action.type) {

      case LOAD_RANDOM:
        return  action.payload

      default:
        return state
    }
  }

  export const getRandom = () => {
    return async dispatch => {
      try{
          dispatch({type: LOAD_RANDOM})
          let url = "api.giphy.com/v1/gifs/random"
          let response = await axios.get(url, {params:{
            api_key: "8vL2ThDZSHYWiWxdHohoyOhYjpKZz6kw",
            tag: "burrito",
            rating: "g",
            random_id: "e826c9fc5c929e0d6c6d423841a282aa"
              }
          })
          dispatch({type: LOAD_RANDOM, payload: response.data})
      }
      catch(error){
          console.log('error')
      }
    }
  }