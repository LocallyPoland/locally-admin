import React, { useEffect, useState } from "react";
import s from "./ActiveOrdersPage.module.css";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import { connect } from "react-redux";
import { getOrdersAction } from "../../store/actions/orderActions";
import ModalWindow from "../../misc/ModalWindow/ModalWindow";

const ActiveOrdersPage = ({
  getOrders,
  order: {
    orders: { activeOrders },
  },
}) => {
  const showModal = (id) => {
    document.body.style.overflow = "hidden";
    setModalVisible(true);
    setOrderId(id);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [orderId, setOrderId] = useState();

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
      <ModalWindow
        isVisible={isModalVisible}
        id={orderId}
        setVisibility={setModalVisible}
      />
      <div className={s.container}>
        {activeOrders &&
          activeOrders.map((active) => {
            return (
              <div
                key={active._id}
                onClick={() => showModal(active._id)}
                className={s.active__orders__item}
              >
                <ActiveOrders
                  key={active._id}
                  onClick={() => showModal(active._id)}
                  orderNumber={active._id.length}
                  orderType={active.parcel || "Paczka"}
                  orderWeight={active.weight || "5"}
                  orderTime={active.deliveryTime || "12.20"}
                  orderStartPlace={
                    active.pickUp ||
                    `${active.deliveryStreet}, ${active.deliveryHouse}`
                  }
                  orderFinishPlace={`${active.deliveryStreet}, ${active.deliveryHouse}`}
                  orderPrice={active.sum}
                  orderStatus={active.status}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { order: state.order };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getOrders: () => dispatch(getOrdersAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ActiveOrdersPage);
