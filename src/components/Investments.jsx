import React from "react";
import { investments } from "../data/investments";
import {reports} from "../data/reports";

export default function Investments({ children }) {
  return (
    <div className="border-2">
      <h1>Nome do fundo</h1>
      {investments.map((inv) => {
         
          return (
              <div key={inv.id}>
            <h1>{inv.description}</h1>
           
          </div>
        );
      })}

      <ul>
        <li>lista com 12 reports</li>
      </ul>
    </div>
  );
}
