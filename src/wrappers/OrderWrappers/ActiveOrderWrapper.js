import React, { useState } from "react";
import s from "./OrderWrapper.module.css";

const ActiveOrderWrapper = ({ children }) => {
  return <div className={s.card}>{children}</div>;
};

export default ActiveOrderWrapper;
