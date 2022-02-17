import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

  export const getRandom = createAsyncThunk(
    "random",
    async(_, thuckAPI) => {
      try{
        let url = "https://api.giphy.com/v1/gifs/random?api_key=8vL2ThDZSHYWiWxdHohoyOhYjpKZz6kw&tag=burrito&rating=g"     
        let response = await axios.get(url)
        return [response.data.data]
      }
      catch(e){
        return thuckAPI.rejectWithValue('download is error')
      }
    }
  )  

  const randomSlice = createSlice({
    name: "random",
    initialState: {
      data:[],
      isLoading: false,
      error: "" },

    reducers: {
      
  },

    extraReducers: {
      [getRandom.fulfilled.type]: (state, action) => {
        state.isLoading = false
        state.error = ""
        state.data = action.payload
      },
      [getRandom.pending]: (state) => {
        state.isLoading = true
      },
      [getRandom.rejected.type]: (state, action) =>{
        state.isLoading = false;
        state.error = action.payload
      }
    }
  })


export default randomSlice.reducer