import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const EmailBody = () => {
  const [body, setBody] = useState("");
  const id = useSelector((state) => state.userReducer.itemId);

  useEffect(() => {
    fetch(`https://flipkart-email-mock.vercel.app/?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBody(data.body);
      });
  }, [id]);

  return (
    <Container>
      <Body>
        <Header>
          <Left>
            <Picture>F</Picture>
            <Title>
              <h2>Lorem Ipsum</h2>
              <p>17/01/2023</p>
            </Title>
          </Left>
          <Right>
            <button>Mark as Favourite</button>
          </Right>
        </Header>
        <BodyText>{parse(body)}</BodyText>
      </Body>
    </Container>
  );
};

const Container = styled.div`
  grid-column: 2 / 3;
  width: 70vw;
  padding: 10px;
`;
const Body = styled.div`
  border: 1px solid #cfd2dc;
  border-radius: 20px;
  height: 87vh;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`;
const Picture = styled.div`
  height: 50px;
  width: 50px;
  background-color: #e54065;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  width: 90%;
  height: 15%;
  justify-content: center;
  align-items: center;
  margin: 10px;
  & button {
    border: none;
    border-radius: 25px;
    background-color: #e54065;
    color: white;
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
  }
`;

const Left = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  grid-column: 4 / 4;
  grid-row: 1 / 3;
`;
const Title = styled.div`
  margin: 15px;
`;
const BodyText = styled.div`
  margin-right: 70px;
  margin-left: 100px;
`;

export default EmailBody;
