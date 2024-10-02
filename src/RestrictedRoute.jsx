import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";


 const RestrictedRoute = ({component: component, redirecTo="/" })=> {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirecTo}/> : component;

};


export default RestrictedRoute