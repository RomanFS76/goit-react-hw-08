import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { Field, Formik, Form, ErrorMessage } from "formik";
import css from "./LoginPage.module.css";

const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = { email: "", password: "" };

const RegistrationPage = () => {
  const dispath = useDispatch();

  const handleSubmit = (values, action) => {
    dispath(login(values));
    action.resetForm();
  };

  return (
    <div className={css.wrapForm}>
      <h1>Please Log In</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form autoComplete="on" className={css.form}>
          <label className={css.labelForm}>
            Email
            <Field type="email" name="email" className={css.inputName}></Field>
            <ErrorMessage name="email" component="span" />
          </label>

          <label className={css.labelForm}>
            Password
            <Field
              type="password"
              name="password"
              className={css.inputName}
            ></Field>
            <ErrorMessage name="password" component="span" />
          </label>

          <button type="submit" className={css.btnReg}>
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
