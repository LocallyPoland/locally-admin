import React from "react";
import s from "./ClientInfo.module.css";

const ClientInfo = ({ userID, paymentType, comments }) => {
  return (
    !!userID && (
      <div className={s.client__info}>
        <div className={s.client__info__container}>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Imię:&nbsp;</div>
            <div className={s.info__item__value}>
              {userID.fName || "Imię nie znalezione"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Nazwisko: &nbsp;</div>
            <div className={s.info__item__value}>
              {userID.lName || "Nazwisko nie znalezione"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Płatność:&nbsp;</div>
            <div className={s.info__item__value}>
              {paymentType === "card" ? "karta" : "gotowka"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>ID:&nbsp;</div>
            <div className={s.info__item__value}>
              {userID._id || "ID nie znaleziony"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__key}>Phone:&nbsp;</div>
            <div className={s.info__item__value}>
              {userID.phone || "Numer nie znaleziony"}
            </div>
          </div>
          <div className={s.client__info__item}>
            <div className={s.info__item__value}>
              Dodatkove uwagi:
              {comments || "Brak komentarzy"}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ClientInfo;
