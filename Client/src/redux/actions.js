import * as actions from "./action-types";
import axios from "axios";
// export const addFav = (char) => {
//     return {
//         type: actions.ADD_FAV, 
//         payload: char
//     }
// }
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: 'ADD_FAV',
                payload: data,
            });
        } catch (error) {
            window.alert(error.message)
        }
    }
};

// export const removeFav = (id) => {
//     return {
//         type: actions.REMOVE_FAV,
//         payload: id
//     }
// }

export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
        try {
            const {data} = await axios.delete(endpoint)
            return dispatch({
                type: 'REMOVE_FAV',
                payload: data,
            });
        } catch (error) {  
            window.alert(error.message)
        }
    };
};

export const filterCards = (gender) => {
    return {
        type: actions.FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: actions.ORDER,
        payload: order
    }
}

export const deleteChars = () => {
    return {
        type: actions.DELETE_CHARS,
    }
}