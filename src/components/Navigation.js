import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { showFav, showOthers } from "../redux/actions/actions";

const Navigation = () => {
  const dispatch = useDispatch();

  const handleFavClick = () => {
    dispatch(showFav());
  };
  const handleClick = () => {
    dispatch(showOthers());
  };
  return (
    <Container>
      <p>Filter by:</p>
      <button onClick={handleClick}>Unead</button>
      <button onClick={handleClick}>Read</button>
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

    &:hover {
      background-color: #e1e4ea;
    }
  }
`;

export default Navigation;
