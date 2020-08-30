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

export default ActiveOrdersPage;
