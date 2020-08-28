import React from 'react'
import s from './Statistics.module.css'
import ActiveOrderWrapper from '../../wrappers/OrderWrappers/ActiveOrderWrapper'
import EndedOrderWrapper from '../../wrappers/OrderWrappers/EndedOrderWrapper'
import Chart from '../Charts/Charts'

const Statistics = () => {
    return(
        <div className={s.statistics__inner}>
            <div className={s.statistics__buttons__row}>
                <div className={s.statistics__button__item}>
                    <ActiveOrderWrapper>
                        <div className={s.statistics__button__item__inner}>
                            <div className={s.statistics__title}>Zysk</div>
                            <div className={s.statistic__content}>
                                <div className={s.statistic__row}>
                                    <div className={s.statistic__name}>Miesiąc:</div>
                                    <div className={s.statistic__value}>8560 zł</div>
                                </div>
                                <div className={s.statistic__row}>
                                    <div className={s.statistic__name}>Kwartal:</div>
                                    <div className={s.statistic__value}>30245 zł</div>
                                </div>
                                <div className={s.statistic__row}>
                                    <div className={s.statistic__name}>Rok:</div>
                                    <div className={s.statistic__value}>123800 zł</div>
                                </div>
                                <div className={s.statistic__among}>150560 zł</div>
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
                                    <div className={s.statistic__value}>112</div>
                                </div>
                                <div className={s.statistic__row}>
                                    <div className={s.statistic__name}>Kwartal:</div>
                                    <div className={s.statistic__value}>350</div>
                                </div>
                                <div className={s.statistic__row}>
                                    <div className={s.statistic__name}>Rok:</div>
                                    <div className={s.statistic__value}>1550 zł</div>
                                </div>
                                <div className={s.statistic__among}>5567 uż.</div>
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
                                    <div className={s.statistic__value}>250</div>
                                </div>
                                <div className={s.statistic__row}>
                                    <div className={s.statistic__name}>Kwartal:</div>
                                    <div className={s.statistic__value}>842</div>
                                </div>
                                <div className={s.statistic__row}>
                                    <div className={s.statistic__name}>Rok:</div>
                                    <div className={s.statistic__value}>2547</div>
                                </div>
                                <div className={s.statistic__among}>8207 zamówień</div>
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
    )
}

export default Statistics