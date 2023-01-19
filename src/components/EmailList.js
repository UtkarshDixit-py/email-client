import React, { useEffect } from 'react'
import EmailItem from './EmailItem'
import styled from 'styled-components'
import { useSelector } from "react-redux";


const EmailList = () => {
    const data = useSelector((state)=>state.userReducer.List);
    const isShowFav = useSelector((state)=>state.userReducer.showFav);
    const favIds = useSelector((state)=>state.userReducer.filteredList);
    const emailList = data.list;
    const favObjs = emailList ? emailList.filter((item)=> favIds.includes(item.id) ) : []
    let readList = isShowFav ? favObjs : emailList ;


  return (
    <Container>
        {readList ? 
            readList.map((obj,i)=>{
                return <EmailItem {...obj} key={i}/>
            })
            :
            <> </>
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