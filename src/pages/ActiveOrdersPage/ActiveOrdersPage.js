import React, { useEffect } from "react";
import s from "./ActiveOrdersPage.module.css";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import { connect } from "react-redux";
import { getOrdersAction } from "../../store/actions/orderActions";

const ActiveOrdersPage = ({ getOrders, orders }) => {
  useEffect(() => {
    (async () => {
      await getOrders();
    })();
  }, []);
  return (
    <div className={s.main__container}>
      <header className={s.header}>
        <div className={s.header__inner}>
          <div className={s.header__title}>Aktywne zamówienia</div>
        </div>
      </header>
      <div className={s.container}>
        {/* <ActiveOrders
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
        /> */}
        {orders?.map((orderItem, i) => (
          <ActiveOrders {...{ orderItem }} key={orderItem._id} />
        ))}
        {/* <ActiveOrders
          orderNumber="11"
          orderType="Paczka"
          orderWeight="21"
          orderTime="14:88"
          orderStartPlace="ul. Rynek 3"
          orderFinishPlace="ul. Lewakowskiego 12/55"
          orderPrice="28"
        /> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { orders: state.orders };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getOrdersAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrdersPage);
