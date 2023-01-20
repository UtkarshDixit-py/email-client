export const setEmails = (emailList) => {
  return {
    type: "SET_EMAILS",
    payload: emailList,
  };
};

export const displayBody = (bodyData) => {
  return {
    type: "DISPLAY_BODY",
    payload: bodyData,
  };
};

export const addToFav = (id) => {
  return {
    type: "ADD_TO_FAV",
    payload: id,
  };
};

export const removeFromFav = (id) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: id,
  };
};

export const showFav = () => {
  return {
    type: "SHOW_FAV",
  };
};

export const showOthers = () => {
  return {
    type: "SHOW_OTHERS",
  };
};

export const setFavFalse = () => {
  return {
    type: "SET_FAV_FALSE",
  };
};
