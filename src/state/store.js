import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TrendingReducer } from "./getTrending";
import { RandomReducer } from "./getRandom";
import { CategoryReducer } from "./getCategories";

const rootReducer = combineReducers({
    trending: TrendingReducer,
    random: RandomReducer,
    category: CategoryReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));