import React from "react";
import PercentageFormat from "./PercentageFormat";

export default function Investment({ children: invReport}) {
  const { month, year, value, percentage } = invReport;
  const monthsNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const currentMonth = monthsNames[month - 1];
  

  

  return (
    <div className="px-4">
      <ul>
        <li className="flex flex-row border my-3 mx-10 ">
          <span className="flex-1">{`${currentMonth}/${year} - R$ ${value.toFixed(2)}`}</span>
          <PercentageFormat>{percentage}</PercentageFormat>
         
        </li>
      </ul>
    </div>
  );
}
