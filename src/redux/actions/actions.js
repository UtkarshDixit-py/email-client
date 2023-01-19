export const setEmails = (emailList)=>{
    return{
        type:"SET_EMAILS",
        payload: emailList
    }
}

export const displayBody = (bodyData)=>{
    return{
        type : "DISPLAY_BODY",
        payload : bodyData
    }
}