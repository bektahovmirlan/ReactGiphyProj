import randomReducer from "./getRandom";
import categoryReducer from "./getCategories";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import trendingReducer from './getTrending';

const rootReducer = combineReducers({
   trending: trendingReducer,
    random: randomReducer,
    category: categoryReducer
})

export const setupStore = () => {
    return configureStore({
       reducer: rootReducer
    })
}
