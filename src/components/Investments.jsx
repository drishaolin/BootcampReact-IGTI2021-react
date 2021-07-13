import React from "react";
//import { investments } from "../data/investments";
//import {reports} from "../data/reports";

export default function Investments({ children: investmentList }) {

    const {description} = investmentList;
  return (
    <div className="font-bold text-center">
      <h1>{description}</h1>
          
    </div>
  );
}
