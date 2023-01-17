import React from "react";
import styled from "styled-components";

const EmailBody = () => {
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
        <BodyText>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
            <br />
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
            <br />
            <br />
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </BodyText>
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
  height: 100%;
  display: flex;
  flex-direction: column;
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
