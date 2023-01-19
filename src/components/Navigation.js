import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { showFav } from "../redux/actions/actions";

const Navigation = () => {
    const favs = useSelector((state)=>state.userReducer.filteredList);
    const dispatch = useDispatch()


    const handleFavClick =()=>{
        dispatch(showFav())
    }
  return (
    <Container>
      <p>Filter by:</p>
      <button>Unead</button>
      <button>Read</button>
      <button onClick={handleFavClick}>Favourites</button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & button {
    border: none;
    border-radius: 25px;
    height: fit-content;
    background-color: transparent;
    color: black;
    font-size: 15px;
    cursor: pointer;
    margin: 10px;
    padding: 5px;

    &:hover{
      background-color: #e1e4ea;
    }
  }
`;

export default Navigation;
