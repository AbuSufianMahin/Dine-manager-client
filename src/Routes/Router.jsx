import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout';
import HomePage from '../Components/Pages/HomePage';
import AddFoodPage from '../Components/Pages/AddFoodPage';
import AuthLayout from '../Layouts/AuthLayout';

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index:true,
                Component: HomePage
            },
            {
                path:'/add-food',
                Component: AddFoodPage
            }
        ]
    },
    {
        path: '/authentication',
        Component: AuthLayout
    }
]);


export default router;