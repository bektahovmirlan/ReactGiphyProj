import randomReducer from "./getRandom";
import categoryReducer from "./getCategories";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trendingReducer from './getTrending';
import userReducer from './users/userSlice'

const rootReducer = combineReducers({
   trending: trendingReducer,
    random: randomReducer,
    category: categoryReducer,
    user: userReducer
})

export const setupStore = () => {
    return configureStore({
       reducer: rootReducer
    })
}
