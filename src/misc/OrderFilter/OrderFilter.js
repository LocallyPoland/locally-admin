import React from "react";
import s from "./OrderFilter.module.css";
import Select from "../Select/Select";

const OrderFilter = () => {
    return (
        <div className={s.filter__container}>
            <div className={s.filter__item}>
                <div className={s.filter__sort__title}>Sortowaine:</div>
                <Select options={[{ label: "Imie", value: "Znaczenie" }]} />
            </div>
            <div className={s.filter__item}>
                <div className={s.filter__sort__title}>Status:</div>
                <Select options={[{ label: "Imie", value: "Znaczenie" }]} />
            </div>
            <div className={s.filter__row}>
                <div className={s.filter__sort__title}>Dokładna data:</div>
                <div className={s.filter__sort__title}>od</div>
                <Select options={[{ label: "Imie", value: "Znaczenie" }]} />
                <div className={s.filter__sort__title}>do</div>
                <Select options={[{ label: "Imie", value: "Znaczenie" }]} />
            </div>
        </div>
    );
};

export default OrderFilter;
