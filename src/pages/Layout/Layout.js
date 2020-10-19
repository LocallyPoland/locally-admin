import React, { useEffect, useState } from "react";
import s from "./Layout.module.css";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import SettingsForm from "../../misc/SettingsForm/SettingsForm";
import Statistics from "../../misc/Statistics/Statistics";
import ModalWindow from "../../misc/ModalWindow/ModalWindow";
import ArrowForward from "../../assets/images/arrow-forward.svg";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as LogoutIcon } from "../../assets/images/logout.svg";
import { logoutAction } from "../../store/actions/adminActions";
import { connect } from "react-redux";
import { getOrdersAction } from "../../store/actions/orderActions";

const Layout = ({ logout, order: { orders }, getOrders }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [orderId, setOrderId] = useState();

  const h = useHistory();
  const Logout = () => {
    logout();
    h.push("/");
  };

  useEffect(() => {
    (async () => {
      await getOrders();
    })();
  }, []);

  const showModal = (id) => {
    document.body.style.overflow = "hidden";
    setModalVisible(true);
    setOrderId(id);
  };

  return (
    <div className={s.main__container}>
      <header className={s.header}>
        <div className={s.header__inner}>
          <div className={s.header__title}>Locally admin panel</div>
          <div className={s.header__user}>
            <div className={s.header__user__name}>jar02212@gmail.com</div>
            <div className={s.header__user__avatar}>
              <LogoutIcon className={s.user__logout} onClick={Logout} />
            </div>
          </div>
        </div>
      </header>
      <ModalWindow
        isVisible={isModalVisible}
        id={orderId}
        setVisibility={setModalVisible}
      />
      <div className={s.orders__container}>
        <div className={s.orders__container__wrapper}>
          <div className={s.order__title__wrapper}>
            <div className={s.column__title}>Aktywne zamówienia</div>
            <Link className={s.column__link} to="/active-orders">
              <span className={s.link__text}>Wszystke</span>
              <img
                className={s.link__img}
                src={ArrowForward}
                alt="arrow-forward"
              />
            </Link>
          </div>
          <div className={s.orders__column}>
            {orders.activeOrders &&
              orders.activeOrders.map((active) => {
                return (
                  <button
                    key={active._id}
                    onClick={() => showModal(active._id)}
                    className={s.order__button}
                  >
                    <ActiveOrders
                      orderNumber={active._id.length}
                      orderType={active.parcel}
                      orderWeight={active.weight}
                      orderTime={active.deliveryTime}
                      orderStartPlace={active.pickUp}
                      orderFinishPlace={active.deliveryAddress}
                      orderPrice={active.sum}
                      orderStatus={active.status}
                    />
                  </button>
                );
              })}
          </div>
        </div>
        <div className={s.orders__container__wrapper}>
          <div className={s.order__title__wrapper}>
            <div className={s.column__title}>Historia zamówień</div>
            <Link className={s.column__link} to="/ended-orders">
              <span className={s.link__text}>Wszystke</span>
              <img
                className={s.link__img}
                src={ArrowForward}
                alt="arrow-forward"
              />
            </Link>
          </div>
          <div className={s.orders__column}>
            {orders.ordersHistory &&
              orders.ordersHistory.map((history) => {
                return (
                  <button
                    key={history._id}
                    onClick={() => showModal(history._id)}
                    className={s.order__button}
                  >
                    <ActiveOrders
                      orderNumber={history._id.length}
                      orderType={history.parcel}
                      orderWeight={history.weight}
                      orderTime={history.deliveryTime}
                      orderStartPlace={history.pickUp}
                      orderFinishPlace={history.deliveryAddress}
                      orderPrice={history.sum}
                      orderStatus={history.status}
                    />
                  </button>
                );
              })}
          </div>
        </div>
      </div>
      <div className={s.settings__container}>
        <div className={s.settings__title}>Ustawienia aplikacji</div>
        <SettingsForm />
      </div>
      <div className={s.statistics__container}>
        <div className={s.statistics__title}>Statystyka</div>
        <Statistics />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { order: state.order };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutAction()),
    getOrders: () => dispatch(getOrdersAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
