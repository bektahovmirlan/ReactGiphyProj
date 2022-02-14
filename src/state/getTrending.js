import axios from 'axios';

  const LOAD_GIFS = "LOAD_GIFS"
  const LOAD_DATA_SUCCESS = "LOAD_DATA.SUCCESS"
  const LOAD_DATA_FAILURE = "LOAD_DATA_FAILURE"

  const defaultState = {
    data: [],
    loading: false,
    errorMessage: ""
  }

  export const TrendingReducer = (state = defaultState, action) => {
    switch(action.type) {
      
      case LOAD_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload
        }
      case LOAD_DATA_FAILURE:
        return {
          ...state,
          errorMessage: action.payload
        }

      default:
        return state
    }
  }

  export const getTrending = () => {
    return async dispatch => {
      try{
          dispatch({type: LOAD_GIFS})
          let url = "http://api.giphy.com/v1/gifs/trending"
          let response = await axios.get(url, {params:{
            api_key: "pOxeAiI8i2u1m7R4apowLVHBttygC1Mu"
              }
          })
          dispatch({type: LOAD_DATA_SUCCESS, payload: response.data.data})
      }
      catch(error){
          dispatch({type: LOAD_DATA_FAILURE, payload: error})
      }
    }
  }