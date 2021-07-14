import React from "react";
import PercentageFormat from "./PercentageFormat";

export default function Investment({ children: invReport}) {
  const { month, year, value, percentage } = invReport;
  const monthsNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  const currentMonth = monthsNames[month - 1];
  const textColor = percentage >= 0 ? "text-green-600" : "text-red-600";
  

  

  return (
    <div className="px-4">
      <ul>
        <li className="flex flex-row space-x-5 border my-3 mx-10 py-1 px-4 ">
          <span>{`${currentMonth}/${year}`}</span>
          <span className={`${textColor} flex-grow`}>{`R$ ${value.toFixed(2)}`}</span>
          <PercentageFormat >{percentage}</PercentageFormat>
         
        </li>
      </ul>
    </div>
  );
}
