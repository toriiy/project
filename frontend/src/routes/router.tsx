import {createBrowserRouter} from "react-router-dom";
import ErrorLayout from "../layouts/error/ErrorLayout";
import MainLayout from "../layouts/main/MainLayout";
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
            {path: 'forgot-password', element: <ForgotPasswordPage/>},
            {path: 'forgot-password/set', element: <SetForgotPassword/>},
            {path: 'my-account', element: <AccountPage/>},
            {path: 'my-account/update-user', element: <UpdateUser/>},
            {path: 'my-account/change-password', element: <ChangePassword/>},
            {path: 'my-account/cart', element: <Cart/>},
            {path: 'my-account/favorite', element: <Favorites/>}
        ]
    }
]);