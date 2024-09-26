import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { Field, Formik, Form } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = { name: "", email: "", password: "" };

const RegistrationPage = () => {
  const dispath = useDispatch();

  const handleSubmit = (values, action) => {
    console.log(values);
    dispath(register(values));
    action.resetForm();
  };

  return (
    <div>
      <h1>Register your account</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form autoComplete="off">
          <label>
            Name
            <Field type="text" name="name"></Field>
          </label>
          <label>
            Email
            <Field type="email" name="email"></Field>
          </label>
          <label>
            Password
            <Field type="password" name="password"></Field>
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
