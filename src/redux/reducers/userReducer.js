const initialState = {
    List:[],
    filteredList:[]
}

export const userReducer = (state = initialState,action)=>{
    switch(action.type){
        case "SET_EMAILS":
            return{
                ...state,
                List : action.payload
            }
        default:
            return state            
    }
}