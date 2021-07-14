import React from "react";
import Header from "../components/Header";
import Investment from "../components/Investment";
import Investments from "../components/Investments";
import Main from "../components/Main";

import { investments } from "../data/investments";
import { reports } from "../data/reports";

export default function InvestmentsPage() {
  // function rentability (v1, v2) {
  //   return (v2 - v1) * 100 / v1;
  // }

  return (
    <div>
      <Header>Projeto React Investments</Header>

      <Main>
        {investments.map((inv) => {
          let filteredReports = reports.filter((rep) => rep.investmentId === inv.id).sort((a, b) => a.month - b.month);
          console.log(filteredReports);
          

          return (
            <Investments key={inv.id}>
              <div>
                <h1 className="font-bold text-center">{inv.description}</h1>
                <h2 className="font-semibold text-center">Rendimento Total: </h2>
                {filteredReports.map((fRep) => (
                  <Investment key={fRep.id} rentability={0}>
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
