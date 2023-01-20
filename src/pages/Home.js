import React from 'react'
import styled from 'styled-components'
import EmailBody from '../components/EmailBody'
import EmailList from '../components/EmailList'
import { useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { setEmails } from '../redux/actions/actions'
import Navigation from '../components/Navigation'


const Home = () => {
  
  const dispatch = useDispatch()
  const displayBody = useSelector((state)=>state.userReducer.displayBody);
    
  useEffect(()=>{
    fetch(`https://flipkart-email-mock.now.sh/`)
      .then((res)=>res.json())
      .then((data)=>dispatch(setEmails(data)))
  },[])



  return (
    <Container>
        <Navigation />
        <EmailList />
        {
          displayBody ? <EmailBody  /> : <></>
        }
        
    </Container>
  )
}

const Container = styled.div`
  height: 93vh;
  padding: 25px;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  grid-template-rows: "1fr 1fr";
`

export default Home