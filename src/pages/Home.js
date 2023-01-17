import React from 'react'
import styled from 'styled-components'
import EmailBody from '../components/EmailBody'
import EmailList from '../components/EmailList'


const Home = () => {
  return (
    <Container>
        <EmailList />
        <EmailBody />
    </Container>
  )
}

const Container = styled.div`
  border: 2px solid green;
  height: 92vh;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
`

export default Home