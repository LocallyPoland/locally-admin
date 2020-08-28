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
                            <ActiveOrders />
                        </div>
                    </div>
                    <div className={s.modal__right__side}>
                        <div className={s.modal__side__title}>
                            Informacje o użytkowniku
                        </div>
                        <div className={s.modal__details__container}>
                            <ClientInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
