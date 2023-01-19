import { showFav } from "../actions/actions"

const initialState = {
    List:[],
    filteredList:[],
    displayBody: false,
    itemId : 0,
    showFav : false

}

export const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_EMAILS":
            return{
                ...state,
                List : action.payload
            }
        case "DISPLAY_BODY":
            return{
                ...state,
                displayBody : true,
                itemId : action.payload
            }
        case "ADD_TO_FAV":
            return{
                ...state,
                filteredList : [...state.filteredList,action.payload]
            }

        case "SHOW_FAV" :
            console.log(state.showFav)
            return{
                ...state,
                showFav : !state.showFav
            }
        default:
            return state            
    }
}