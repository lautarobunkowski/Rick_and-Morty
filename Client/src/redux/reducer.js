import * as actions from "./action-types";

const initialState = {
    favorites:[],
    allCharacters: [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        // case actions.ADD_FAV:
        //     return {...state, allCharacters: [...state.allCharacters, action.payload], favorites: [...state.favorites, action.payload]}
        case 'ADD_FAV':
            return { ...state, favorites: action.payload, allCharacters: action.payload };

        case actions.FILTER:
            const filter = state.allCharacters.filter(char => {
                if(char.gender === action.payload){
                    return true
                } else if(action.payload === 'All'){
                    return true;
                }
            })
            return {...state, favorites: filter}
        case actions.ORDER:
            return {...state, favorites: state.favorites.sort((a, b) => {
                if(action.payload === 'A'){
                    return a.id - b.id;
                } else if(action.payload === 'D') {
                    return b.id - a.id;
                }
            })}

        case actions.REMOVE_FAV:
            return { ...state, favorites: action.payload, allCharacters: action.payload};

        case actions.DELETE_CHARS:
            return {...state, favorites:[], allCharacters: []}  
        default:
            return {...state}
    }
}

export default rootReducer;