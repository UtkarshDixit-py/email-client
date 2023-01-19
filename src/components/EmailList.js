import React from 'react'
import EmailItem from './EmailItem'
import styled from 'styled-components'
import { useSelector } from "react-redux";


const EmailList = () => {
    const data = useSelector((state)=>state.userReducer.List);
    const emailList = data.list;
  return (
    <Container>
        {emailList ? 
            emailList.map((obj,i)=>{
                return <EmailItem {...obj} key={i}/>
            })
            :
            <></>
        }
    </Container>
  )
}

const Container = styled.div`
  grid-column: 1 / 2;
  overflow: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`

export default EmailList