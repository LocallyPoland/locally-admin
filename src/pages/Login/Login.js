import React from "react";
import s from "./Login.module.css";
import { withFormik } from "formik";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginAction } from "../../store/actions/adminActions";
import { Redirect, useHistory } from "react-router-dom";

const Login = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const history = useHistory();
  return (
    <form onSubmit={handleSubmit} className={s.main__container}>
      <div className={s.header__title}>Logovanie</div>
      <div className={s.login}>
        <div className={s.login__container}>
          <label className={s.label}>e-mail</label>
          <input
            className={s.input}
            placeholder="vadvit009@gmail.com"
            onChange={handleChange}
            value={values.email}
            name="email"
            onBlur={handleBlur}
            className={classnames({
              [s.error]: errors.email && touched.email,
            })}
          />
          <label className={s.label}>Hasło</label>
          <input
            placeholder="vadvit009"
            type="password"
            onChange={handleChange}
            value={values.password}
            name="password"
            onBlur={handleBlur}
          />
          {/* {errors.email && touched.email && (
            <div id="feedback">{errors.values}</div>
          )} */}
          <div className={s.btn}>
            <button className={s.form__submit__button} onSubmit={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
const formikHOC = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.name = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "fuck off";
    }

    return errors;
  },
  handleSubmit: async (values, { props: { login, history } }) => {
    const isSuccess = await login(values);
    if (isSuccess) {
      history.push("./");
    }
  },
})(Login);

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return { login: (admin) => dispatch(loginAction(admin)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(formikHOC);
