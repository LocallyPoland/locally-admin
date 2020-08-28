import React from "react";
import s from "./SettingsForm.module.css";

const SettingsForm = () => {
  const changesConfirm = (e) => {
    e.preventDefault();

    const conf = window.confirm("Podtwierdzić zmiany?");

    if (conf) console.log("Confirmed!");
  };

  return (
    <form className={s.form} onSubmit={changesConfirm}>
      <div className={s.form__wrapper}>
        <div className={s.form__inputs}>
          <div className={s.form__inputs__wrapper}>
            <div className={s.form__delivery__price__title}>Cena dostawy</div>
            <input className={s.form__delivery__price__input} />
          </div>
          <div className={s.form__inputs__wrapper}>
            <div className={s.form__delivery__time__title}>Czas dostawy</div>
            <div className={s.form__inputs__delivery__row}>
              <span className={s.form__delivery__from}>od</span>
              <input className={s.form__delivery__time__input} />
              <span className={s.form__delivery__to}>do</span>
              <input className={s.form__delivery__time__input} />
            </div>
          </div>
        </div>
        <div className={s.form__switch}>
          <div className={s.form__switch__title}>Wyłączyć aplikację</div>
          <label className={s.form__switch__button}>
            <input type="checkbox" />
            <div />
          </label>
        </div>
      </div>
      <button className={s.form__submit__button}>Zapisz zmiany</button>
    </form>
  );
};

export default SettingsForm;
