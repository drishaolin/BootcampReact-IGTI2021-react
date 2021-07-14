import React from "react";
import Header from "../components/Header";
import Investment from "../components/Investment";
import Investments from "../components/Investments";
import Main from "../components/Main";

import { investments } from "../data/investments";
import { reports } from "../data/reports";

export default function InvestmentsPage() {
  

  return (
    <div>
      <Header>Projeto React Investments</Header>

      <Main>
        {investments.map((inv) => {
          const filteredReports = reports
            .filter((rep) => rep.investmentId === inv.id)
            .sort((a, b) => a.month - b.month)
            .map((currentReport, index, reports) => {
              const percentage = (index === 0 ? 0 : (currentReport.value-reports[index-1].value)*100/reports[index-1].value);
              return {...currentReport, percentage};
            });
          

          const earnings = (filteredReports[filteredReports.length-1].value - filteredReports[0].value).toFixed(2);
          const anualPercentage = (earnings *100 / filteredReports[0].value).toFixed(2);
         

          return (
            <Investments key={inv.id}>
              <div>
                <h1 className="font-bold text-center">{inv.description}</h1>
                <h2 className="font-semibold text-center text-sm">Rendimento Total: R$ {earnings} ({anualPercentage}%)</h2>
                {filteredReports.map((fRep) => (
                  <Investment key={fRep.id}>
                    {fRep}
                  </Investment>
                ))}
              </div>
            </Investments>
          );
        })}
      </Main>
    </div>
  );
}
