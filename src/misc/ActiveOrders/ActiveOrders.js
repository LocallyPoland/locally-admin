import React, {useState, useEffect} from "react";
import s from "./ActiveOrders.module.css";
import ConnectorImg from "../../assets/images/connector.svg";
import ActiveOrderWrapper from "../../wrappers/OrderWrappers/ActiveOrderWrapper";
import {getOrdersAction} from "../../store/actions/orderActions";
import {connect} from "react-redux";

const ActiveOrders = (
    {
        orderNumber,
        orderType,
        orderWeight,
        orderTime,
        orderStartPlace,
        orderFinishPlace,
        orderPrice,
        orderStatus,
        getOrders,
        _id,
    }) => {
    return (
        <div className={s.active__orders}>
            <div className={s.active__orders__inner}>
                <ActiveOrderWrapper>
                    <div className={s.card__inner}>
                        <div className={s.card__header}>
                            <div className={s.card__title}>Zamówienie n.{orderNumber}</div>
                            <div className={s.card__status}>
                                {orderStatus === "created" && "w trakcie" ||
                                orderStatus === "done" && "wykonane" ||
                                orderStatus === "cancelled" && "skasowane"}
                            </div>
                        </div>
                        <div className={s.card__content}>
                            <div className={s.card__content__top}>
                                <div className={s.card__order__type}>{orderType}</div>
                                <div className={s.card__order__info}>
                                    <div className={s.card__order__weight}>
                                        <div className={s.order__weight__text}>waga do:</div>
                                        <div className={s.order__weight__value}>
                                            {orderWeight} kg
                                        </div>
                                    </div>
                                    <div className={s.card__order__time}>
                                        <div className={s.order__time__text}>czas dostawy:</div>
                                        <div className={s.order__time__value}>{orderTime}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.card__content__bottom}>
                                {/* <div className={s.card__order__type}>
                                    Adresy
                                </div> */}
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
                                            {orderStartPlace}
                                        </div>
                                        <div className={s.card__order__end__adress}>
                                            {orderFinishPlace}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.card__price}>{orderPrice} zł</div>
                        </div>
                    </div>
                </ActiveOrderWrapper>
            </div>
        </div>
    );
};
export default ActiveOrders;
