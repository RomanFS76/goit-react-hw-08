import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";


const PrivateRoute =({component,redirecTo="/"} )=>{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return isLoggedIn ? component : <Navigate to={redirecTo}/>;
};




export default PrivateRoute;