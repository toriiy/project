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
import UpdateUser from "../components/udate-user/UpdateUser";
import ChangePassword from "../components/change-password/ChangePassword";
import Cart from "../components/cart/Cart";
import Favorites from "../components/favorites/Favorites";
import SetForgotPassword from "../components/set-forgot-password/SetForgotPassword";

export const routes = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement: <ErrorLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'contacts', element: <ContactPage/>},
            {path: 'filter', element: <FilterPage/>},
            {path: 'sign-in', element: <SignInPage/>},
            {path: 'sign-up', element: <SignUpPage/>},
            {
                path: 'forgot-password', element: <ForgotPasswordPage/>, children: [
                    {path: 'set', element: <SetForgotPassword/>}
                ]
            },
            {
                path: 'my-account', element: <AccountPage/>, children: [
                    {path: 'update-user', element: <UpdateUser/>},
                    {path: 'change-password', element: <ChangePassword/>},
                    {path: 'cart', element: <Cart/>},
                    {path: 'favorite', element: <Favorites/>}
                ]
            }
        ]
    }
]);