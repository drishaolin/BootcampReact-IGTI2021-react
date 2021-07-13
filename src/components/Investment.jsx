import React from "react";

export default function Investment({children: invReport}) {
  
    const {month, year, value} = invReport;
    const monthsNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    const currentMonth = monthsNames[month-1];
    return (
    <div className="px-4">
      <ul>
        <li>{`${currentMonth}/${year} - R$ ${value.toFixed(2)}`}</li>
      </ul>
    </div>
  );
}
