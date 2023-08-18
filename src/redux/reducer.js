import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, SELECTOR_ORDER, SELECTOR_FILTER} from "./action-types";

const initialState = {
    favorites:[],
    allCharacters: [],
    selectorFilter: '',
    selectorOrder: '',
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state, allCharacters: [...state.allCharacters, action.payload], favorites: [...state.favorites, action.payload]}
        case FILTER:
            const filter = state.allCharacters.filter(char => {
                if(char.gender === action.payload){
                    return true
                } else if(action.payload === 'All'){
                    return true;
                }
            })
            return {...state, favorites: filter}
        case ORDER:
            return {...state, favorites: state.favorites.sort((a, b) => {
                if(action.payload === 'A'){
                    return a.id - b.id;
                } else if(action.payload === 'D') {
                    return b.id - a.id;
                }
            })}
        case REMOVE_FAV:
            const deleteCharFav = state.favorites.filter(fav => fav.id !== Number(action.payload))
            const deleteCharHome = state.allCharacters.filter(fav => fav.id !== Number(action.payload))
            return {...state, favorites: deleteCharFav, allCharacters: deleteCharHome}   
            //si yo no seteo allCharaters con el array con personaje eliminado y filtrado, no me muestra nada en la home
            //pero si lo seteo con esos valores, me esta mostrando solo los elementos filtrados y el resto no existe mas
        case SELECTOR_FILTER:
            return {...state};
        case SELECTOR_ORDER:
            return {...state};
        default:
            return {...state}
    }
}

export default rootReducer;