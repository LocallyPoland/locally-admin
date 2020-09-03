import React from "react";
import s from "./ClientInfo.module.css";

const ClientInfo = () => {
    return (
        <div className={s.client__info}>
            <div className={s.client__info__container}>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>Imię:&nbsp;</div>
                    <div className={s.info__item__value}>Tomasz</div>
                </div>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>Nazwisko: &nbsp;</div>
                    <div className={s.info__item__value}>Zeliński</div>
                </div>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>Płatność:&nbsp;</div>
                    <div className={s.info__item__value}>karta</div>
                </div>
                <div className={s.client__info__item}>
                    <div className={s.info__item__key}>ID:&nbsp;</div>
                    <div className={s.info__item__value}>3aDLv5HTT5789</div>
                </div>
            </div>
        </div>
    );
};

export default ClientInfo;
