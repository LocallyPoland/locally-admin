import React, { useState } from "react";
import s from "./ModalWindow.module.css";
import classNames from "class-names";
import CloseImg from "../../assets/images/close.svg";
import ActiveOrders from "../ActiveOrders/ActiveOrders";
import ClientInfo from "../ClientInfo/ClientInfo";

const ModalWindow = ({ isVisible, setVisibility }) => {
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
        <div className={visible} onClick={closeModal}>
            <div className={s.modal__inner}>
                <div className={s.modal__container}>
                    <button
                        className={s.modal__close__btn}
                        onClick={closeModal}
                    >
                        <img
                            className={s.modal__close__img}
                            src={CloseImg}
                            alt="close"
                        />
                    </button>
                    <div className={s.modal__left__side}>
                        <div className={s.modal__side__title}>
                            Szczegóły zamówienia
                        </div>
                        <div className={s.modal__details__container}>
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
                    <div className={s.modal__right__side}>
                        <div className={s.modal__right__side__info}>
                            <div className={s.modal__side__title}>
                                Informacje o użytkowniku
                            </div>
                            <div className={s.modal__details__container}>
                                <ClientInfo />
                            </div>
                        </div>
                        <div className={s.modal__right__side__rows__container}>
                            <div className={s.modal__right__side__row}>
                                <button
                                    className={
                                        s.modal__right__side__complete__btn
                                    }
                                >
                                    Zakończyć zamówienie
                                </button>
                            </div>
                            <div className={s.modal__right__side__row}>
                                <button
                                    className={
                                        s.modal__right__side__cancel__btn
                                    }
                                >
                                    Skasować zamówienie
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
