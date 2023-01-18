import React from "react";
import styled from "styled-components";

const EmailItem = ({ date, from, short_description, subject }) => {
  const timestamp = date;
  const myDate = new Date(timestamp);
  const dateString = myDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const timeString = myDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Container>
      <Left>
        <Picture>F</Picture>
      </Left>
      <Right>
        <div>
          From : <b>{from.email}</b>
        </div>
        <div>
          Subject : <b>Lorem ipsum</b>
        </div>
        <div>{short_description}</div>
        <div>
        {dateString} {timeString}
          <Tag>Favourite</Tag>
        </div>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  width: auto;
  height: 100px;
  border: 1px solid #cfd2dc;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  padding: 15px;
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
const Left = styled.div``;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  white-space: nowrap;
  padding: 15px;
`;

export const Tag = styled.b`
  color: #e54065;
  margin: 50px;
  font-size: small;
`;

export default EmailItem;
