import React, { useState } from "react";
import s from "./Layout.module.css";
import UserAvatar from "../../assets/images/avatar.jpg";
import ActiveOrders from "../../misc/ActiveOrders/ActiveOrders";
import SettingsForm from "../../misc/SettingsForm/SettingsForm";
import Statistics from "../../misc/Statistics/Statistics";
import ModalWindow from "../../misc/ModalWindow/ModalWindow";
import ArrowForward from "../../assets/images/arrow-forward.svg";
import { Link } from "react-router-dom";

const Layout = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  return (
    <div className={s.main__container}>
      <header className={s.header}>
        <div className={s.header__inner}>
          <div className={s.header__title}>Locally admin panel</div>
          <div className={s.header__user}>
            <div className={s.header__user__name}>jar021203@gmail.com</div>
            <div className={s.header__user__avatar}>
              <img
                className={s.user__avatar}
                src={UserAvatar}
                alt="UserAvatar"
                onClick={showModal}
              />
            </div>
          </div>
        </div>
      </header>
      <ModalWindow isVisible={isModalVisible} setVisibility={setModalVisible} />
      <div className={s.orders__container}>
        <div className={s.orders__column}>
          <div className={s.order__title__wrapper}>
            <div className={s.column__title}>Aktywne zamówienia</div>
            <Link className={s.column__link} to="/active-orders">
              <span className={s.link__text}>Wszystke</span>
              <img
                className={s.link__img}
                src={ArrowForward}
                alt="arrow-forward"
              />
            </Link>
          </div>
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
        <div className={s.orders__column}>
          <div className={s.order__title__wrapper}>
            <div className={s.column__title}>Historia zamówień</div>
            <Link className={s.column__link} to="/ended-orders">
              <span className={s.link__text}>Wszystke</span>
              <img
                className={s.link__img}
                src={ArrowForward}
                alt="arrow-forward"
              />
            </Link>
          </div>
          <ActiveOrders
            orderType="Paczka"
            orderWeight="21"
            orderTime="14:88"
            orderStartPlace="ul. Rynek 3"
            orderFinishPlace="ul. Lewakowskiego 12/55"
            orderPrice="28"
          />
        </div>
      </div>
      <div className={s.settings__container}>
        <div className={s.settings__title}>Ustawienia aplikacji</div>
        <SettingsForm />
      </div>
      <div className={s.statistics__container}>
        <div className={s.statistics__title}>Statystyka</div>
        <Statistics
          profitPrice="123"
          profitQuarterPrice="123"
          profitYearPrice="123"
          profitFullprice="123"
          userMonthQuarantine="123"
          userQuarterQuarantine="132"
          userYearQuarantine="8645"
          userFullQuarantine="123"
          orderMonthQuarantine="58"
          orderQuarterQuarantine="351"
          orderYearQuarantine="45"
          orderFullQuarantine="56"
        />
      </div>
    </div>
  );
};

export default Layout;
