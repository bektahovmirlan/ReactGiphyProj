import {omit} from 'lodash';

export const setFavorite = gif => ({
    type: "ADD_FAVORITE",
    payload: gif
})

export const removeFavorite = gifId => ({
    type: "REMOVE_FAVORITE",
    payload: gifId
})

export const getLocalStorage = key => {
    const data = localStorage.getItem(key);

    if (data !== null) {
        return JSON.parse(data);
    }
    
    return {};
}

const initialState = getLocalStorage('store');

const favoriteReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FAVORITE":
            return {
                ...state,
                ...action.payload
            }
        case "REMOVE_FAVORITE":
            return omit(state, [action.payload])
        default:
            return state;
    }
}

export const setLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export default favoriteReducer;