import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { TrendingReducer } from "./getTrending";
import { RandomReducer } from "./getRandom";

const rootReducer = combineReducers({
    trending: TrendingReducer,
    random: RandomReducer,
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));