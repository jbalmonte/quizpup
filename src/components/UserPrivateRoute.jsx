import { Redirect, Route } from "react-router-dom";
import auth from "../auth";

const PrivateRouteForms = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!auth.isAuthenticated()) return <Component {...props} />;
                else return <Redirect to="/home" />;
            }}
        />
    );
};

export default PrivateRouteForms;
