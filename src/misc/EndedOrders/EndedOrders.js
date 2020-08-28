import React from "react";
import s from "./EndedOrders.module.css";
import EndedOrderWrapper from "../../wrappers/OrderWrappers/EndedOrderWrapper";
import ConnectorImg from "../../assets/images/connector.svg";

const EndedOrders = () => {
    return (
        <div className={s.ended__orders}>
            <div className={s.ended__orders__inner}>
                <EndedOrderWrapper>
                    <div className={s.card__inner}>
                        <div className={s.card__header}>
                            <div className={s.card__title}>Zamówienie n.42</div>
                            <div className={s.card__status}>w trakcie</div>
                        </div>
                        <div className={s.card__content}>
                            <div className={s.card__content__top}>
                                <div className={s.card__order__type}>
                                    Paczka
                                </div>
                                <div className={s.card__order__info}>
                                    <div className={s.card__order__weight}>
                                        <div className={s.order__weight__text}>
                                            waga do:
                                        </div>
                                        <div className={s.order__weight__value}>
                                            20 kg
                                        </div>
                                    </div>
                                    <div className={s.card__order__time}>
                                        <div className={s.order__time__text}>
                                            czas dostawy:
                                        </div>
                                        <div className={s.order__time__value}>
                                            15:30
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.card__content__bottom}>
                                <div className={s.card__order__type}>
                                    Adresy
                                </div>
                                <div className={s.card__order__adress__wrapper}>
                                    <div className={s.card__order__from__to}>
                                        <div className={s.card__order__from}>
                                            z
                                        </div>
                                        <div className={s.card__order__to}>
                                            do
                                        </div>
                                    </div>
                                    <img
                                        className={
                                            s.card__order__connector__img
                                        }
                                        src={ConnectorImg}
                                        alt="connectorImg"
                                    />
                                    <div className={s.card__order__adress}>
                                        <div
                                            className={
                                                s.card__order__start__adress
                                            }
                                        >
                                            ul. Rynek 3
                                        </div>
                                        <div
                                            className={
                                                s.card__order__end__adress
                                            }
                                        >
                                            ul. Lewakowskiego 12/55
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={s.card__price}>27,50 zł</div>
                        </div>
                    </div>
                </EndedOrderWrapper>
            </div>
        </div>
    );
};

export default EndedOrders;
