import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Components/Pages/HomePage';
import AddFoodPage from '../Components/Pages/AddFoodPage';
import AuthLayout from '../Layouts/AuthLayout';
import LoginPage from '../Components/Pages/LoginPage';
import AllFood from '../Components/Pages/AllFood';
import MyAddedFoods from '../Components/Pages/MyAddedFoods';
import FoodGallery from '../Components/Pages/FoodGallery';
import MyOrders from '../Components/Pages/MyOrders';
import RegisterPage from '../Components/Pages/RegisterPage';
import PrivateRoute from '../Provider/PrivateRoute';

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
                path: '/all-food',
                Component: AllFood
            },
            {
                path: "/my-added-food",
                Component: MyAddedFoods
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

    }
]);


export default router;