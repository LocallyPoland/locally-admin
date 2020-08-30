import React from "react";
import s from "./EndedOrdersPage.module.css";
import OrderFilter from "../../misc/OrderFilter/OrderFilter";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";

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
          Zamówienia od <span className={s.title__date}>21.08.20</span>
        </div>
        <ActiveOrders
          orderNumber="11"
          orderType="Paczka"
          orderWeight="21"
          orderTime="14:88"
          orderStartPlace="ul. Rynek 3"
          orderFinishPlace="ul. Lewakowskiego 12/55"
          orderPrice="28"
        />
        <ActiveOrders
          orderNumber="11"
          orderType="Paczka"
          orderWeight="21"
          orderTime="14:88"
          orderStartPlace="ul. Rynek 3"
          orderFinishPlace="ul. Lewakowskiego 12/55"
          orderPrice="28"
        />
        <ActiveOrders
          orderNumber="11"
          orderType="Paczka"
          orderWeight="21"
          orderTime="14:88"
          orderStartPlace="ul. Rynek 3"
          orderFinishPlace="ul. Lewakowskiego 12/55"
          orderPrice="28"
        />
        <ActiveOrders
          orderNumber="11"
          orderType="Paczka"
          orderWeight="21"
          orderTime="14:88"
          orderStartPlace="ul. Rynek 3"
          orderFinishPlace="ul. Lewakowskiego 12/55"
          orderPrice="28"
        />
      </div>
    </div>
  );
};

export default EndedOrdersPage;
