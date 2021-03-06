import React, { useEffect } from "react";
import s from "./Statistics.module.css";
import ActiveOrderWrapper from "../../wrappers/OrderWrappers/ActiveOrderWrapper";
import EndedOrderWrapper from "../../wrappers/OrderWrappers/EndedOrderWrapper";
import Chart from "../Charts/Charts";
import { connect } from "react-redux";
import {
  getStatsAction,
  getUseerStatsAction,
  getUserStatsAction,
} from "../../store/actions/statsAction";

const Statistics = ({ getStats, getUserStats, stats }) => {
  useEffect(() => {
    (async () => {
      await getStats();
      await getUserStats();
    })();
  }, []);
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
                  <div className={s.statistic__value}>
                    {stats.data.ordersSumPerMonth} zł
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Kwartal:</div>
                  <div className={s.statistic__value}>
                    {stats.data.ordersSumPerQuarter} zł
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Rok:</div>
                  <div className={s.statistic__value}>
                    {stats.data.ordersSumPerYear} zł
                  </div>
                </div>
                <div className={s.statistic__among}>
                  {stats.data.ordersSumPerAllTime} zł
                </div>
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
                    {stats.users.usersPerMonth}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Kwartal:</div>
                  <div className={s.statistic__value}>
                    {stats.users.usersPerQuarter}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Rok:</div>
                  <div className={s.statistic__value}>
                    {stats.users.usersPerYear}
                  </div>
                </div>
                <div className={s.statistic__among}>
                  {stats.users.allUsers}uż.
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
                    {stats.data.ordersLengthPerMonth}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Kwartal:</div>
                  <div className={s.statistic__value}>
                    {stats.data.ordersLengthPerQuarter}
                  </div>
                </div>
                <div className={s.statistic__row}>
                  <div className={s.statistic__name}>Rok:</div>
                  <div className={s.statistic__value}>
                    {stats.data.ordersLengthPerYear}
                  </div>
                </div>
                <div className={s.statistic__among}>
                  {stats.data.ordersLengthPerAllTime} zamówień
                </div>
              </div>
            </div>
          </ActiveOrderWrapper>
        </div>
      </div>
      <div className={s.chart__container}>
        <div className={s.card}>
          <Chart {...{ stats }} />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { stats: state.stats };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getStats: () => dispatch(getStatsAction()),
    getUserStats: () => dispatch(getUserStatsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
