import React from "react";
import s from "./ClientInfo.module.css";

const ClientInfo = ({ userID, paymentType }) => {
  return (
    !!userID && (
      <div className={s.client__info}>
        <div className={s.client__info__container}>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Imię:&nbsp;</div>
            <div className={s.info__item__value}>
              {userID.fName || "Tomasz"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Nazwisko: &nbsp;</div>
            <div className={s.info__item__value}>
              {userID.lName || "Zeliński"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Płatność:&nbsp;</div>
            <div className={s.info__item__value}>{paymentType || "karta"}</div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>ID:&nbsp;</div>
            <div className={s.info__item__value}>
              {userID._id || "3aDLv5HTT5789"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Phone:&nbsp;</div>
            <div className={s.info__item__value}>
              {userID.phone || "+480202541*"}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ClientInfo;
