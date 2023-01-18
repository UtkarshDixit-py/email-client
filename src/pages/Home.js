import React from 'react'
import styled from 'styled-components'
import EmailBody from '../components/EmailBody'
import EmailList from '../components/EmailList'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setEmails } from '../redux/actions/actions'


const Home = () => {
  
  const dispatch = useDispatch()
    
  useEffect(()=>{
    fetch(`https://flipkart-email-mock.now.sh/`)
      .then((res)=>res.json())
      .then((data)=>dispatch(setEmails(data)))
  })


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