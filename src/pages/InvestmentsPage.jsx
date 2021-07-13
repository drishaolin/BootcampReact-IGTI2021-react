import React from 'react'
import Header from "../components/Header"
import Investment from '../components/Investment';
import Investments from '../components/Investments'
import Main from "../components/Main"

import { investments } from "../data/investments";
import {reports} from "../data/reports";




export default function InvestmentsPage() {


    return (
        <div>
            <Header>Projeto React Investments</Header>
      
      <Main>   
          
      {investments.map((inv) => {
         let filteredReports = reports.filter(rep => rep.investmentId === inv.id).sort((a, b)=> a.month - b.month);
         
         return (
             <div key={inv.id}>
          <Investments>{inv}</Investments>
          {filteredReports.map(fRep => <Investment key={fRep.id}>{fRep}</Investment>)}
          
          
         </div>
       );
     })}  

          
      </Main>
        </div>
    )
}
