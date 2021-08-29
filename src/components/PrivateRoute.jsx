import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
    // @ts-ignore
    const { isAuthenticated } = useAuth()
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuthenticated) return <Component {...props} />;
                else return <Redirect to="/login" />;
            }}
        />
    );
};

export default PrivateRoute;
