// import { useEffect } from "react";
import "./App.css";
// import ContactForm from "./components/ContactForm/ContactForm";
// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/contacts/operations";
import { selectError, selectLoading } from "./redux/contacts/selectors";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Contacts from "./pages/ContactsPage/Contacts";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage  />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Layout>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p className="loading-text">Loading...</p>}
      {error && <p className="error-text">{error}, try again later</p>}
      <ContactList /> */}
    </>
  );
}

export default App;
