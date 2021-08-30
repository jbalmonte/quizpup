// @ts-nocheck
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export const PublicRoute = ({ ...props }) => {
    const { isAuthenticated } = useAuth()
    return isAuthenticated
        ? (<Redirect to="/quizzes" />)
        : (<Route {...props} />)
};