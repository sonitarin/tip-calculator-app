import React, { useState, useEffect } from "react";
// import styles from './TipDisplay.module.css';

const TipDisplay = (props) => {
  const [tipPerPerson, setTipPerPerson] = useState("");
  const [totalPerPerson, setTotalPerPerson] = useState("");
  const billAmount = +props.billAmount;
  const tipPercent = +props.tipPercent;
  const peopleCount = +props.peopleCount;

  const canCalc = props.peopleCountIsValid && props.tipPercentIsValid;


  useEffect(() => {
      if (canCalc) {
        setTipPerPerson(((billAmount / peopleCount) * tipPercent).toFixed(2));
        console.log(+tipPerPerson)
        setTotalPerPerson(((billAmount / peopleCount) + (+tipPerPerson)).toFixed(2))
        // console.log(+totalPerPerson);
      }
  }, [canCalc, billAmount, peopleCount, tipPercent, tipPerPerson, totalPerPerson]);

  // var tipPerPerson = (+props.billAmount / +props.peopleCount) * props.tipAmount;
  // var totalPerPerson = (+props.billAmount / +props.peopleCount) + (+tipPerPerson) ;

  return (
    <React.Fragment>
      <p>Tip Amount</p>
      <p>/ person</p>
      <div>${canCalc ? (+tipPerPerson).toFixed(2) : "0.00"}</div>
      <p>Total</p>
      <p>/ person</p>
      <div>${canCalc ? (+totalPerPerson).toFixed(2) : "0.00"}</div>
      <button onClick={props.onReset}>Reset</button>
    </React.Fragment>
  );
};

export default TipDisplay;
