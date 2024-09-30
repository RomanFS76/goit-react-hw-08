import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { Field, Formik, Form } from "formik";
import css from "./RegistrationPage.module.css";

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
        // validationSchema={FeedbackSchema}
      >
        <Form autoComplete="on">
          <label className={css.label}>
            Name
            <Field type="text" name="name" className={css.field}></Field>
          </label>
          <label className={css.label}>
            Email
            <Field type="email" name="email" className={css.field}></Field>
          </label>
          <label className={css.label}>
            Password
            <Field type="password" name="password" className={css.field}></Field>
          </label>
          <button type="submit" className={css.btnReg}>Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;










// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from './operations';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: {
//       name: null,
//       email: null,
//     },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, (state) => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, (state) => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;
