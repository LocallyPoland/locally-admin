import React, { useState, useEffect } from "react";
import s from "./ModalWindow.module.css";
import classNames from "class-names";
import CloseImg from "../../assets/images/close.svg";
import ActiveOrders from "../ActiveOrders/ActiveOrders";
import ClientInfo from "../ClientInfo/ClientInfo";
import { getSingleOrderAction } from "../../store/actions/orderActions";
import { connect } from "react-redux";

const ModalWindow = ({
  isVisible,
  setVisibility,
  id,
  getSingleOrder,
  singleOrder,
}) => {
  const {
    _id,
    parcel,
    weight,
    deliveryTime,
    pickup,
    deliveryStreet,
    deliveryHouse,
    sum,
    userID,
    paymentType,
  } = singleOrder;
  useEffect(() => {
    _id &&
      (async () => {
        await getSingleOrder(id);
      })();
  }, [id]);

  const visible = classNames({
    [s.modal]: isVisible,
    [s.visible]: isVisible,
    [s.hidden]: !isVisible,
  });

  const closeModal = () => {
    document.body.style.overflow = "";
    setVisibility(false);
  };

  return (
    !!singleOrder && (
      <div className={visible} onClick={closeModal}>
        <div className={s.modal__inner}>
          <div className={s.modal__container}>
            <button className={s.modal__close__btn} onClick={closeModal}>
              <img className={s.modal__close__img} src={CloseImg} alt="close" />
            </button>
            <div className={s.modal__left__side}>
              <div className={s.modal__side__title}>Szczegóły zamówienia</div>
              <div className={s.modal__details__container}>
                <ActiveOrders
                  orderNumber={(_id && _id.length) || "11"}
                  orderType={parcel || "Paczka"}
                  orderWeight={weight || "21"}
                  orderTime={deliveryTime || "14:88"}
                  orderStartPlace={pickup || "ul. Rynek 3"}
                  orderFinishPlace={
                    `${deliveryStreet}, ${deliveryHouse}` ||
                    "ul. Lewakowskiego 12/55"
                  }
                  orderPrice={sum || "28"}
                />
              </div>
            </div>
            <div className={s.modal__right__side}>
              <div className={s.modal__right__side__info}>
                <div className={s.modal__side__title}>
                  Informacje o użytkowniku
                </div>
                <div className={s.modal__details__container}>
                  <ClientInfo {...{ userID }} {...{ paymentType }} />
                </div>
              </div>
              <div className={s.modal__right__side__rows__container}>
                <div className={s.modal__right__side__row}>
                  <button className={s.modal__right__side__complete__btn}>
                    Zakończyć zamówienie
                  </button>
                </div>
                <div className={s.modal__right__side__row}>
                  <button className={s.modal__right__side__cancel__btn}>
                    Skasować zamówienie
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

const mapStateToProps = (state) => {
  return {
    singleOrder: state.order.singleOrder,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getSingleOrder: (id) => dispatch(getSingleOrderAction(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalWindow);
// export default ModalWindow;
