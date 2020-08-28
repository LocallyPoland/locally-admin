import React from "react";
import s from "./EndedOrdersPage.module.css";
import EndedOrders from "../../misc/EndedOrders/EndedOrders";
import OrderFilter from "../../misc/OrderFilter/OrderFilter";

const EndedOrdersPage = () => {
    return (
        <div className={s.main__container}>
            <header className={s.header}>
                <div className={s.header__inner}>
                    <div className={s.header__title}>Historia zamówień</div>
                </div>
            </header>
            <div className={s.filter}>
                <OrderFilter />
            </div>
            <div className={s.container}>
                <div className={s.ended__orders__title}>
                    Zamówienia od{" "}
                    <span className={s.title__date}>21.08.20</span>
                </div>
                <EndedOrders />
            </div>
        </div>
    );
};

export default EndedOrdersPage;
