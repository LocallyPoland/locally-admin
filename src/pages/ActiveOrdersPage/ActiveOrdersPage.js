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
  console.log(orders);
  // console.log(order);
  //   useEffect(() => {
  //     getOrders();
  //   }, []);
  //   const { activeOrders, ordersHistory } = orderItems;
  return (
    <div className={s.main__container}>
      <header className={s.header}>
        <div className={s.header__inner}>
          <div className={s.header__title}>Aktywne zamówienia</div>
        </div>
      </header>
      <div className={s.container}>
        {/* {orders.ActiveOrders.map((orderItems, i) => (
          <ActiveOrders {...{ orderItems }} key={orderItems._id} />
        ))} */}
        {/* <div className={s.active__orders__item}>
          <ActiveOrders
            orderNumber="11"
            orderType="Paczka"
            orderWeight="21"
            orderTime="14:88"
            orderStartPlace="ul. Rynek 3"
            orderFinishPlace="ul. Lewakowskiego 12/55"
            orderPrice="28"
          />
        </div> */}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { order: state.orders };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getOrdersAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrdersPage);
