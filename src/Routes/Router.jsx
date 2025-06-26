import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Components/Pages/HomePage';
import AddFoodPage from '../Components/Pages/AddFoodPage';
import AuthLayout from '../Layouts/AuthLayout';
import LoginPage from '../Components/Pages/LoginPage';

import MyAddedFoods from '../Components/Pages/MyAddedFoods';
import FoodGallery from '../Components/Pages/FoodGallery';
import MyOrders from '../Components/Pages/MyOrders';
import RegisterPage from '../Components/Pages/RegisterPage';
import PrivateRoute from '../Provider/PrivateRoute';
import AllFoodPage from '../Components/Pages/AllFoodPage';
import FoodDetails from '../Components/Pages/FoodDetails';
import PurchaseFoodPage from '../Components/Pages/PurchaseFoodPage';
import Error404Page from '../Components/Pages/Error404Page';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage
            },
            {
                path: '/add-food',
                element:
                    <PrivateRoute>
                        <AddFoodPage></AddFoodPage>
                    </PrivateRoute>
            },
            {
                path: '/food-details',
                Component: AllFoodPage,
            },
            {
                path: '/food-details/:id',
                loader: ({ params }) => fetch(`https://restaurant-management-server-tan-pi.vercel.app/food-details/${params.id}`),
                Component: FoodDetails
            },
            {
                path: '/purchase-food/:id',
                loader: ({ params }) => fetch(`https://restaurant-management-server-tan-pi.vercel.app/food-details/${params.id}`),
                element:
                    <PrivateRoute>
                        <PurchaseFoodPage></PurchaseFoodPage>
                    </PrivateRoute>
            },
            {
                path: "/my-added-food",
                element:
                    <PrivateRoute>
                        <MyAddedFoods></MyAddedFoods>
                    </PrivateRoute>
            },
            {
                path: "/food-gallery",
                Component: FoodGallery
            },
            {
                path: '/my-orders',
                element:
                    <PrivateRoute>
                        <MyOrders></MyOrders>
                    </PrivateRoute>
            }
        ]
    },
    {
        path: '/authentication',
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: LoginPage,
            },
            {
                path: 'login',
                Component: LoginPage
            },
            {
                path: 'register',
                Component: RegisterPage
            }
        ]

    },
    {
        path: '*',
        Component: Error404Page
    }
]);


export default router;