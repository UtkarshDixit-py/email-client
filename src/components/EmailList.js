import React from 'react'
import EmailItem from './EmailItem'
import styled from 'styled-components'

const EmailList = () => {
    let arr = [1,2,3,4,5,6,7,1,1,1,1,1]
  return (
    <Container>
        {
            arr.map((i)=>{
                return <EmailItem/>
            })
        }
    </Container>
  )
}

const Container = styled.div`
  border: 2px solid red;
  grid-column: 1 / 2;
  overflow: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
`

export default EmailList