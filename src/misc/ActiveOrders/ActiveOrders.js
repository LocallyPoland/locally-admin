import React, { useState, useEffect } from "react";
import s from "./ActiveOrders.module.css";
import ConnectorImg from "../../assets/images/connector.svg";
import ActiveOrderWrapper from "../../wrappers/OrderWrappers/ActiveOrderWrapper";

const ActiveOrders = ({ orderItem }) => {
  const {
    // orderNumber,
    // orderType,
    weight,
    createdAt,
    deliveryStreet,
    deliveryCity,
    sum,
    _id,
  } = orderItem;

  return (
    <div className={s.active__orders}>
      <div className={s.active__orders__inner}>
        <ActiveOrderWrapper>
          <div className={s.card__inner}>
            <div className={s.card__header}>
              <div className={s.card__title}>Zamówienie n. nema</div>
              <div className={s.card__status}>w trakcie</div>
            </div>
            <div className={s.card__content}>
              <div className={s.card__content__top}>
                <div className={s.card__order__type}>nema</div>
                <div className={s.card__order__info}>
                  <div className={s.card__order__weight}>
                    <div className={s.order__weight__text}>waga do:</div>
                    <div className={s.order__weight__value}>{weight} kg</div>
                  </div>
                  <div className={s.card__order__time}>
                    <div className={s.order__time__text}>czas dostawy:</div>
                    <div className={s.order__time__value}>{createdAt}</div>
                  </div>
                </div>
              </div>
              <div className={s.card__content__bottom}>
                <div className={s.card__order__adress__wrapper}>
                  <div className={s.card__order__from__to}>
                    <div className={s.card__order__from}>z</div>
                    <div className={s.card__order__to}>do</div>
                  </div>
                  <img
                    className={s.card__order__connector__img}
                    src={ConnectorImg}
                    alt="connectorImg"
                  />
                  <div className={s.card__order__adress}>
                    <div className={s.card__order__start__adress}>
                      {deliveryStreet}
                    </div>
                    <div className={s.card__order__end__adress}>
                      {deliveryCity}
                    </div>
                  </div>
                </div>
              </div>
              <div className={s.card__price}>{sum} zł</div>
            </div>
          </div>
        </ActiveOrderWrapper>
      </div>
    </div>
  );
};
export default ActiveOrders;
