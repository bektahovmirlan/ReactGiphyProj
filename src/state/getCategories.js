import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

  export const getCategory = createAsyncThunk(
    "categories",
      async(str, thuckAPI) => {
        try{
          let url = `https://api.giphy.com/v1/gifs/search?api_key=8vL2ThDZSHYWiWxdHohoyOhYjpKZz6kw&q=${str}&limit=25&offset=0&rating=g&lang=en`
          let response = await axios.get(url)
          return response.data.data
        }
        catch(e){
          return thuckAPI.rejectWithValue("download is error")
        }
      }
  )
  
  const categorySlice = createSlice({
    name: "categories",
    initialState: {
      data: [],
      isLoading: false,
      error: ""},
      
    reducer: {},
    
    extraReducers: {
      [getCategory.fulfilled.type]: (state, action) => {
        state.data = action.payload
        state.isLoading = false
        state.error = ""
      },
      [getCategory.pending]: (state) => {
        state.isLoading = true
      },
      [getCategory.rejected.type]: (state, action) => {
        state.isLoading = false
        state.error = action.payload
      }
    }
  })

  export default categorySlice.reducer