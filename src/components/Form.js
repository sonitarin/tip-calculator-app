import { useState } from "react";
import styles from "./Form.module.css";
import TipDisplay from "./TipDisplay";
import TipSelector from "./TipSelector";

const Form = () => {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState();
  const [peopleCount, setPeopleCount] = useState("");
  const [peopleCountTouched, setPeopleCountTouched] = useState(false);

  const peopleCountIsValid =
    peopleCount.trim().length !== 0 && +peopleCount > 0;

  const tipPercentIsValid = !isNaN(+tipPercent);

  const billAmountHandler = (event) => {
    event.preventDefault();
    var bill = event.target.value.split(".").map((el, i) => i ? el.split("").slice(0,2).join("") : el).join(".");
    setBillAmount(bill);
  };

  const peopleCountHandler = (event) => {
    event.preventDefault();
    var count = event.target.value;
    if (count.includes(".")) {
      count = count.replace(".", "")
    }
    var formattedCount = count;
    setPeopleCount(formattedCount);
  };

  const peopleCountTouchedHandler = () => {
    setPeopleCountTouched(true);
  };

  const tipSelectHandler = (selectedTipPercent) => {
    setTipPercent(selectedTipPercent);
  };

  const resetFormHandler = (event) => {
    event.preventDefault();
    setBillAmount("");
    setTipPercent("");
    setPeopleCount("");
    setPeopleCountTouched(false);
  };

  return (
    <form className={styles.block}>
      <label htmlFor="bill">Bill</label>
      <input
        placeholder="0"
        value={billAmount}
        onChange={billAmountHandler}
        type="number"
        step="0.01"
        id="bill"
        min="0"
      ></input>
      <TipSelector
        onTipSelect={tipSelectHandler}
        onReset={resetFormHandler}
        tipPercent={tipPercent}
      />
      <label htmlFor="people-count">Number of People</label>
      {!peopleCountIsValid && peopleCountTouched && <p>Can't be zero</p>}
      <input
        placeholder="0"
        value={peopleCount}
        onInput={peopleCountHandler}
        onBlur={peopleCountTouchedHandler}
        type="number"
        id="people-count"
        min="0"
      ></input>
      <TipDisplay
        billAmount={billAmount}
        peopleCount={peopleCount}
        tipPercent={tipPercent}
        tipPercentIsValid={tipPercentIsValid}
        peopleCountIsValid={peopleCountIsValid}
        onReset={resetFormHandler}
      />
    </form>
  );
};

export default Form;
