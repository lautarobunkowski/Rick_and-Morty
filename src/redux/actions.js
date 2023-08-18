import { ADD_FAV, REMOVE_FAV, FILTER, ORDER,  SELECTOR_FILTER, SELECTOR_ORDER} from "./action-types";

export const addFav = (char) => {
    return {
        type: ADD_FAV, 
        payload: char
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}

export const orderSelector = (order) => {
    return {
        type: SELECTOR_ORDER,
        payload: order
    }
}

export const filterSelector = (filter) => {
    return {
        type: SELECTOR_FILTER,
        payload: filter
    }
}