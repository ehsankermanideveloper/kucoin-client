import { Navigate } from "react-router-dom";

const Authenticated = (Component) => {

    return (props) => {
        return localStorage.getItem("token") ? <Component {...props} /> : <Navigate to="/login" />
    }
}
export default Authenticated;