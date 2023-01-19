
const initialState = {
    List:[],
    filteredList:[],
    displayBody: false,
    itemId : 0
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
        default:
            return state            
    }
}