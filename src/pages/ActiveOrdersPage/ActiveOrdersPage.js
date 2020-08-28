import React from "react";
import s from "./ActiveOrdersPage.module.css";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";

const ActiveOrdersPage = () => {
    return (
        <div className={s.main__container}>
            <header className={s.header}>
                <div className={s.header__inner}>
                    <div className={s.header__title}>Aktywne zamówienia</div>
                </div>
            </header>
            <div className={s.container}>
                <ActiveOrders />
            </div>
        </div>
    );
};

export default ActiveOrdersPage;
