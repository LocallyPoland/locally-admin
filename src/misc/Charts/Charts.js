import React from "react";
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
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" name="Zysk" fill="#696897" />
            </BarChart>

            {/* <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend verticalAlign="top" height={36} />
                <Line
                    name="Zysk"
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    yAxisId="left"
                />
                <Line
                    name="Za"
                    type="monotone"
                    dataKey="uv"
                    stroke="#82ca9d"
                    yAxisId="left"
                />
            </LineChart> */}
        </ResponsiveContainer>
    );
};

export default Charts;
