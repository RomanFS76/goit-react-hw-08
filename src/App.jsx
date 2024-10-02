import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { lazy, useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("./pages/Home/Home"));
const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const Contacts = lazy(() => import("./pages/ContactsPage/Contacts"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing....</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirecTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirecTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirecTo="/login" component={<Contacts />} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
