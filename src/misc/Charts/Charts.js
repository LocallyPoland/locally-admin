import React, { useEffect, useMemo } from "react";
import s from "./Charts.module.css";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import { polishMonths } from "../../utils/utils";

const Charts = ({ stats }) => {
  const data2 = useMemo(() => {
    return Object.entries(stats.months).map(([key, value], i) => {
      // console.log("key ===", key);
      // console.log("value ===", value);
      return {
        name: polishMonths[i],
        uv: value,
      };
    });
  }, [stats.months]);

  const screenWidth = window.innerWidth;

  return (
    <ResponsiveContainer
      width={screenWidth < 700 ? "350%" : "100%"}
      height="100%"
    >
      <BarChart data={data2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" name="Zysk" fill="#696897" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Charts;
