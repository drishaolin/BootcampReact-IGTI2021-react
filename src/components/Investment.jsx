import React from "react";

export default function Investment({children: invReport}) {
  
    const {month, year, value} = invReport;
    return (
    <div>
      <ul>
        <li>{`${month}/${year} - R$ ${value.toFixed(2)}`}</li>
      </ul>
    </div>
  );
}
