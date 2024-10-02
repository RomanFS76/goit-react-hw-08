import { Formik, Field, Form, ErrorMessage } from "formik";
// import React from "react";
import { useId } from "react";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { addContacts } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";

const initialValues = { name: "", number: "" };
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const id = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, action) => {
    dispatch(addContacts(values))
      .unwrap()
      .then(() => {
        toast.success("Successfully created!", {
          duration: 2000,
          position: "center",
          style: { background: "green", color: "white" },
        });
      })
      .catch(() => {
        toast.error("New contact not created!", {
          duration: 2000,
          position: "center",
        });
      });
    action.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.labelForm} htmlFor={`${id}-name`}>
            Name
          </label>
          <Field
            className={css.inputName}
            type="text"
            name="name"
            id={`${id}-name`}
          />
          <ErrorMessage name="name" component="span" />
          <label className={css.labelForm} htmlFor={`${id}-number`}>
            Number
          </label>
          <Field type="number" name="number" id={`${id}-number`} />
          <ErrorMessage name="number" component="span" />
          <button className={css.btnSubmit} type="submit" onClick={() => {}}>
            Add contact
          </button>
        </Form>
      </Formik>
      <Toaster />
    </>
  );
};

export default ContactForm;
