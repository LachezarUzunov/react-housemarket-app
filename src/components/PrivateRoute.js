import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spiner from "./Spinner";

const PrivateRoute = () => {
    const {loggedIn, checkingStatus} = useAuthStatus()

    if (checkingStatus) {
        return <Spiner />
    }

    return (
        loggedIn ? <Outlet /> : <Navigate to="/sign-in"/>
    )
}

export default PrivateRoute;