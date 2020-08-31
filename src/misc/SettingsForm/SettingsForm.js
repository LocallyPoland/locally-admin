import React from "react";
import s from "./SettingsForm.module.css";
import { withFormik } from "formik";
import { connect } from "react-redux";

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

    if (conf) console.log("Confirmed!");
  };
  console.log(values);
  return (
    <form className={s.form} onSubmit={changesConfirm}>
      <div className={s.form__wrapper}>
        <div className={s.form__inputs}>
          <div className={s.form__inputs__wrapper}>
            <div className={s.form__delivery__price__title}>Cena dostawy</div>
            <input
              className={s.form__delivery__price__input}
              onChange={handleChange}
              value={values.deliveryPrice}
              name="deliveryPrice"
              onBlur={handleBlur}
            />
          </div>
          <div className={s.form__inputs__wrapper}>
            <div className={s.form__delivery__time__title}>Czas dostawy</div>
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
        </div>
        <div className={s.form__switch}>
          <div className={s.form__switch__title}>Wyłączyć aplikację</div>
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
      <button className={s.form__submit__button} onSubmit={handleSubmit}>
        Zapisz zmiany
      </button>
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

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(SettingsForm);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
