import React, { useEffect } from "react";
import s from "./SettingsForm.module.css";
import addNotification from "react-push-notification";
import { withFormik } from "formik";
import { connect } from "react-redux";
import Logo from "../../assets/images/symbol.png";
import {
    getSettingsAction,
    patchSettingsAction,
} from "../../store/actions/settingsActions";

const SettingsForm = ({
    settings,
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    getSettings,
    setValues,
}) => {
    const changesConfirm = (e) => {
        e.preventDefault();

        const conf = window.confirm("Podtwierdzić zmiany?");
        if (conf) handleSubmit();
    };

    const sendNotification = () => {
        addNotification({
            title: "Locally",
            subtitle: "Nowe zamówienie",
            message: "Paczka 10kg z ul.Marszalkowska 1/20 do ul.Maryniarska 53",
            theme: "darkblue",
            duration: 10000,
            native: true,
            icon: Logo,
        });
    };

    setTimeout(() => {
        sendNotification();
    }, 5000);

    useEffect(() => {
        getSettings();
    }, []);

    useEffect(() => {
        const {
            price,
            priceForCustomer,
            switcher,
            timeStart,
            timeStop,
        } = settings;
        if (settings) {
            setValues({
                ...values,
                price,
                priceForCustomer,
                switcher,
                timeStart,
                timeStop,
            });
        }
    }, [settings]);

    return (
        <form className={s.form} onSubmit={changesConfirm}>
            <div className={s.form__wrapper}>
                <div className={s.form__inputs}>
                    <div className={s.form__inputs__wrapper}>
                        <div className={s.form__delivery__price__title}>
                            Cena dostawy jak najszybciej
                        </div>
                        <div className={s.input__wrapper}>
                            <input
                                className={s.form__delivery__price__input}
                                onChange={handleChange}
                                value={values.price}
                                name="price"
                                onBlur={handleBlur}
                                type="number"
                            />
                            <span className={s.zl}>zł</span>
                        </div>
                    </div>
                    <div className={s.form__inputs__wrapper}>
                        <div className={s.form__delivery__price__title}>
                            Cena dostawy na określoną godzinę
                        </div>
                        <div className={s.input__wrapper}>
                            <input
                                className={s.form__delivery__price__input}
                                onChange={handleChange}
                                value={values.priceForCustomer}
                                name="priceForCustomer"
                                onBlur={handleBlur}
                                type="number"
                            />
                            <span className={s.zl}>zł</span>
                        </div>
                    </div>
                    <div className={s.form__inputs__wrapper}>
                        <div className={s.form__delivery__time__title}>
                            Czas dostawy
                        </div>
                        <div className={s.form__inputs__delivery__row}>
                            <span className={s.form__delivery__from}>od</span>
                            <input
                                className={s.form__delivery__time__input}
                                onChange={handleChange}
                                value={values.timeStart}
                                name="timeStart"
                                onBlur={handleBlur}
                                // type="number"
                            />
                            <span className={s.form__delivery__to}>do</span>
                            <input
                                className={s.form__delivery__time__input}
                                onChange={handleChange}
                                value={values.timeStop}
                                name="timeStop"
                                onBlur={handleBlur}
                                // type="number"
                            />
                        </div>
                    </div>
                    <div className={s.form__switch}>
                        <div className={s.form__switch__title}>
                            Wyłączyć aplikację
                        </div>
                        <label className={s.form__switch__button}>
                            <input
                                type="checkbox"
                                onChange={handleChange}
                                checked={values.switcher}
                                name="switcher"
                                onBlur={handleBlur}
                            />
                            <div />
                        </label>
                    </div>
                </div>
            </div>
            <div className={s.form__submit__button__row}>
                <button className={s.form__submit__button}>
                    Zapisz zmiany
                </button>
            </div>
        </form>
    );
};
const formikHOC = withFormik({
    mapPropsToValues: () => ({
        price: "",
        priceForCustomer: "",
        switcher: "",
        timeStart: "",
        timeStop: "",
    }),

    handleSubmit: async (values, { props: { patchSettings } }) => {
        const isSuccess = await patchSettings({
            ...values,
            priceForCustomer: +values.priceForCustomer,
            price: +values.price,
            timeStart: +values.timeStart,
            timeStop: +values.timeStop,
            switcher: +values.switcher[0] === "on" ? true : false,
        });
        // if (isSuccess) {
        //   resetForm({
        //     price: "",
        //     priceForCustomer: "",
        //     switcher: "",
        //     timeStart: "",
        //     timeStop: "",
        //   });
        // }
    },
})(SettingsForm);

const mapStateToProps = (state) => {
    return { settings: state.settings };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getSettings: (aToken) => dispatch(getSettingsAction(aToken)),
        patchSettings: (data) => dispatch(patchSettingsAction(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
