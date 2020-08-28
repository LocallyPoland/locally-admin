import React from "react";
import s from "./ClientInfo.module.css";

const ClientInfo = () => {
    return (
        <div className={s.client__info}>
            <div className={s.client__info__container}>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>Imię: </div>
                    <div className={s.info__item__value}>Tomasz</div>
                </div>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>Imię: </div>
                    <div className={s.info__item__value}>Tomasz</div>
                </div>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>Imię: </div>
                    <div className={s.info__item__value}>Tomasz</div>
                </div>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>Imię: </div>
                    <div className={s.info__item__value}>Tomasz</div>
                </div>
            </div>
        </div>
    );
};

export default ClientInfo;
