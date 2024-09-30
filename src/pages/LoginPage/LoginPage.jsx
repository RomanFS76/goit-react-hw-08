import React from "react";
import { useDispatch } from "react-redux";
// import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import { Field, Formik, Form } from "formik";
import css from "./LoginPage.module.css";

// const FeedbackSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   email: Yup.string()
//     .min(8, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
//   password: Yup.string()
//     .min(8, "Too Short!")
//     .max(50, "Too Long!")
//     .required("Required"),
// });

const initialValues = { email: "", password: "" };

const RegistrationPage = () => {
  const dispath = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispath(login(values));
    action.resetForm();
  };

  return (
    <div>
      <h1>Please Log In</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={FeedbackSchema}
      >
        <Form autoComplete="on">
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field}></Field>
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field}></Field>
          </label>
          <button type="submit" className={css.btnReg}>Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
