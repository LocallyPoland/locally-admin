import React from "react";
import s from "./Statistics.module.css";
import ActiveOrderWrapper from "../../wrappers/OrderWrappers/ActiveOrderWrapper";
import EndedOrderWrapper from "../../wrappers/OrderWrappers/EndedOrderWrapper";
import Chart from "../Charts/Charts";

const Statistics = ({
  profitPrice,
  profitQuarterPrice,
  profitYearPrice,
  profitFullprice,
  userMonthQuarantine,
  userQuarterQuarantine,
  userYearQuarantine,
  userFullQuarantine,
  orderMonthQuarantine,
  orderQuarterQuarantine,
  orderYearQuarantine,
  orderFullQuarantine,
}) => {
  return (
    <div className={s.statistics__inner}>
      <div className={s.statistics__buttons__row}>
        <div className={s.statistics__button__item}>
          <ActiveOrderWrapper>
            <div className={s.statistics__button__item__inner}>
              <div className={s.statistics__title}>Zysk</div>
              <div className={s.statistic__content}>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Miesiąc:</div>
                  <div className={s.statistic__value}>{profitPrice} zł</div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Kwartal:</div>
                  <div className={s.statistic__value}>
                    {profitQuarterPrice} zł
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Rok:</div>
                  <div className={s.statistic__value}>{profitYearPrice} zł</div>
                </div>
                <div className={s.statistic__among}>{profitFullprice} zł</div>
              </div>
            </div>
          </ActiveOrderWrapper>
        </div>
        <div className={s.statistics__button__item}>
          <ActiveOrderWrapper>
            <div className={s.statistics__button__item__inner}>
              <div className={s.statistics__title}>Użytkowniki</div>
              <div className={s.statistic__content}>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Miesiąc:</div>
                  <div className={s.statistic__value}>
                    {userMonthQuarantine}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Kwartal:</div>
                  <div className={s.statistic__value}>
                    {userQuarterQuarantine}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Rok:</div>
                  <div className={s.statistic__value}>{userYearQuarantine}</div>
                </div>
                <div className={s.statistic__among}>
                  {userFullQuarantine} uż.
                </div>
              </div>
            </div>
          </ActiveOrderWrapper>
        </div>
        <div className={s.statistics__button__item}>
          <ActiveOrderWrapper>
            <div className={s.statistics__button__item__inner}>
              <div className={s.statistics__title}>Zamówienia</div>
              <div className={s.statistic__content}>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Miesiąc:</div>
                  <div className={s.statistic__value}>
                    {orderMonthQuarantine}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Kwartal:</div>
                  <div className={s.statistic__value}>
                    {orderQuarterQuarantine}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Rok:</div>
                  <div className={s.statistic__value}>
                    {orderYearQuarantine}
                  </div>
                </div>
                <div className={s.statistic__among}>
                  {orderFullQuarantine} zamówień
                </div>
              </div>
            </div>
          </ActiveOrderWrapper>
        </div>
      </div>
      <div className={s.chart__container}>
        <EndedOrderWrapper>
          <Chart />
        </EndedOrderWrapper>
      </div>
    </div>
  );
};

export default Statistics;
