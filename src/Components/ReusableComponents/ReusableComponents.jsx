import React from "react";
import style from "./ReusableComponents.module.css";

// Small button component
export const SmallButton = ({ smallButtonLabel }) => {
  return (
    <button className={style.smallButton}>
      {smallButtonLabel}
    </button>
  );
};

// Checkbox component
export const Checkbox = ({ id, label, checked, onChange }) => {
  return (
    <li className={style.checkBox}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </li>
  );
};
