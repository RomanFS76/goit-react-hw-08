import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { deleteContacts } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={css.wrapperContact}>
        <div className={css.wrapNext}>
          <p className={css.contactText}>
            <FaUser className={css.icon} />
            {name}
          </p>
          <p className={css.contactText}>
            <FaPhoneAlt className={css.icon} />
            {number}
          </p>
        </div>

        <button
          type="button"
          className={css.btnDelete}
          onClick={() => dispatch(deleteContacts(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
