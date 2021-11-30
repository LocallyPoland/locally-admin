import React, { useState } from "react";
import s from "./OrderWrapper.module.css";

const ActiveOrderWrapper = ({backgroundColor, children }) => {
  return <div className={s.card} style={{backgroundColor}}>{children}</div>;
};

export default ActiveOrderWrapper;
