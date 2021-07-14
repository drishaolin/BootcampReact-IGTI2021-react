import React from "react";

export default function Investment({ children: invReport, rentability = 0 }) {
  const { month, year, value } = invReport;
  const monthsNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const currentMonth = monthsNames[month - 1];

  // function rentability (v1, v2) {
  //   return (v2 - v1) * 100 / v1;
  // }

  return (
    <div className="px-4">
      <ul>
        <li className="flex flex-row">
          <span className="flex-1">{`${currentMonth}/${year} - R$ ${value.toFixed(2)}`}</span>
          <span>{`Rendimento: ${rentability.toFixed(2)}%`}</span>
        </li>
      </ul>
    </div>
  );
}
