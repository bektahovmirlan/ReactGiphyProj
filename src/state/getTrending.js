import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
  
  export const getTrending = createAsyncThunk(
    "trending", 
      async(_, thunkAPI) => {
        try{
          let url = "http://api.giphy.com/v1/gifs/trending"
          let response = await axios.get(url, {params:{
            api_key: "pOxeAiI8i2u1m7R4apowLVHBttygC1Mu"
              }
          })
          return response.data.data
        }
        catch(e){
          return thunkAPI.rejectWithValue("download is error")
        }
      }
  )


  const trendingSlice = createSlice({
    name: "trending",
    initialState: {
      data:[],
      isLoading: false,
      error: "" },

    reducers: {
      
  },

    extraReducers: {
      [getTrending.fulfilled.type]: (state, action) => {
        state.isLoading = false
        state.error = ""
        state.data = action.payload
      },
      [getTrending.pending]: (state) => {
        state.isLoading = true
      },
      [getTrending.rejected.type]: (state, action) =>{
        state.isLoading = false;
        state.error = action.payload
      }
    }
  })


export default trendingSlice.reducer