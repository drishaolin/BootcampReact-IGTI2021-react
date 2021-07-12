import React from 'react'
import Header from "../components/Header"
import Investments from '../components/Investments'
import Main from "../components/Main"




export default function InvestmentsPage() {


    return (
        <div>
            <Header>Projeto React Investments</Header>
      
      <Main>   
          
           <Investments></Investments>
      </Main>
        </div>
    )
}
