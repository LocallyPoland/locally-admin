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
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
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

    // useEffect(() => {
    //   setSettings(aToken);
    // }, [aToken]);
    // console.log(values);
    return (
        <form className={s.form} onSubmit={changesConfirm}>
            <div className={s.form__wrapper}>
                <div className={s.form__inputs}>
                    <div className={s.form__inputs__wrapper}>
                        <div className={s.form__delivery__price__title}>
                            Cena dostawy
                        </div>
                        <input
                            className={s.form__delivery__price__input}
                            onChange={handleChange}
                            value={values.deliveryPrice}
                            name="deliveryPrice"
                            onBlur={handleBlur}
                        />
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
                                value={values.deliveryStartTime}
                                name="deliveryStartTime"
                                onBlur={handleBlur}
                            />
                            <span className={s.form__delivery__to}>do</span>
                            <input
                                className={s.form__delivery__time__input}
                                onChange={handleChange}
                                value={values.deliveryFinishTime}
                                name="deliveryFinishTime"
                                onBlur={handleBlur}
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
                                checked={values.isChecked}
                                name="isChecked"
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
        deliveryPrice: "",
        deliveryStartTime: "",
        deliveryFinishTime: "",
        isChecked: false,
    }),

    handleSubmit: async (values, { props: { patchSettings } }) => {
        const isSuccess = await patchSettings(values);
        if (isSuccess) {
            alert("123");
        }
    },
})(SettingsForm);

const mapStateToProps = (state) => {
    // return { orders: state.admin.orders };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getSettings: (aToken) => dispatch(getSettingsAction(aToken)),
        patchSettings: (aToken) => dispatch(patchSettingsAction(aToken)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
