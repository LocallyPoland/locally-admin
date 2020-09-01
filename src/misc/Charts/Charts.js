import React, { useEffect } from "react";
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

const Charts = () => {
    const data = [
        {
            name: "STYCZEŃ",
            uv: 4500,
            amt: 2400,
        },
        {
            name: "LUTY",
            uv: 3000,
            amt: 2210,
        },
        {
            name: "MARZEC",
            uv: 2000,
            amt: 2290,
        },
        {
            name: "KWIECIEŃ",
            uv: 2780,
            amt: 2000,
        },
        {
            name: "MAJ",
            uv: 1890,
            amt: 2181,
        },
        {
            name: "CZERWIEC",
            uv: 2390,
            amt: 2500,
        },
        {
            name: "LIPIEC",
            uv: 3490,
            amt: 2100,
        },
        {
            name: "SIERPIEŃ",
            uv: 4000,
            amt: 2400,
        },
        {
            name: "WRZESIEŃ",
            uv: 3000,
            amt: 2210,
        },
        {
            name: "PAŹDZIERNIK",
            uv: 2000,
            amt: 2290,
        },
        {
            name: "LISTOPAD",
            uv: 2780,
            amt: 2000,
        },
        {
            name: "GRUDZIEŃ",
            uv: 1890,
            amt: 2181,
        },
    ];

    const screenWidth = window.innerWidth;

    return (
        <ResponsiveContainer
            width={screenWidth < 700 ? "300%" : "100%"}
            height="100%"
        >
            <BarChart data={data}>
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
