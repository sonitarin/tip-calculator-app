import React from "react";

const TipSelector = (props) => {

  const tipPercent = props.tipPercent;

  const tipSelectedHandler = (event) => {
    props.onTipSelect(event.target.value);
  };

  return (
    <React.Fragment>
      <label>Select Tip %</label>
      <div>
        <input
          type="radio"
          id="five-percent"
          value="0.05"
          name="tip-percent"
          checked={tipPercent === "0.05"}
          onChange={tipSelectedHandler}
        />
        <label>5%</label>
        <input
          type="radio"
          id="ten-percent"
          value="0.1"
          name="tip-percent"
          checked={tipPercent === "0.1"}
          onChange={tipSelectedHandler}
        />
        <label>10%</label>
        <input
          type="radio"
          id="fifteen-percent"
          value="0.15"
          name="tip-percent"
          checked={tipPercent === "0.15"}
          onChange={tipSelectedHandler}
        />
        <label>15%</label>
        <input
          type="radio"
          id="twenty-five-percent"
          value="0.25"
          name="tip-percent"
          checked={tipPercent === "0.25"}
          onChange={tipSelectedHandler}
        />
        <label>25%</label>
        <input
          type="radio"
          id="fifty-percent"
          value="0.5"
          name="tip-percent"
          checked={tipPercent === "0.5"}
          onChange={tipSelectedHandler}
        />
        <label>50%</label>
        <input
          type="radio"
          id="custom-percent"
          value="custom"
          name="tip-percent"
          onChange={tipSelectedHandler}
        />
        <label>Custom</label>
      </div>
    </React.Fragment>
  );
};

export default TipSelector;
