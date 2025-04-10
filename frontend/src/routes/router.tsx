import {createBrowserRouter} from "react-router-dom";
import ErrorLayout from "../layouts/ErrorLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import FilterPage from "../pages/FilterPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import AccountPage from "../pages/AccountPage";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement: <ErrorLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'contacts', element: <ContactPage/>},
            {path: 'filter', element: <FilterPage/>},
            {path: 'sign-in', element: <SignInPage/>},
            {path: 'sign-up', element: <SignUpPage/>},
            {path: 'forgot-password', element: <ForgotPasswordPage/>},
            {path: 'my-account', element: <AccountPage/>}
        ]
    }
]);