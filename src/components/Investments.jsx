import React from "react";
//import { investments } from "../data/investments";
//import {reports} from "../data/reports";

export default function Investments({ children: investmentList }) {

    const {description} = investmentList;
  return (
    <div className="border-2 m-5">
      <h1>{description}</h1>
          
    </div>
  );
}
