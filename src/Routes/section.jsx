import { Outlet, useRoutes } from "react-router-dom";
import { lazy, Suspense } from 'react';

// import { Dashboard, SharedLayouts } from "../pages/dashboard";
import { DashboardLayout } from "../Layouts";
import { Reset, Login, Signup, ResetPassword } from "../pages/auth";
import SignUpSuccess from "../pages/auth/SignUpSuccess";
import ResetSuccess from "../pages/auth/ResetSucess";
import ProtectedRoute from "./ProtectedRoute";


export const IndexPage = lazy(()=>import ('../pages/dashboard/Dashboard'));
export const Reservation = lazy(()=>import ('../pages/dashboard/Reservations'))
export const Orders = lazy(()=>import ('../pages/dashboard/PendingOrders'));
export const Menu = lazy(()=>import ('../pages/dashboard/OurMenu'));
export const Profile = lazy(()=>import ('../pages/dashboard/Profile'));
export const Invoice = lazy(()=>import ('../pages/dashboard/Invoice'));


export default function Routes() {
  let element = useRoutes([
    {
      element:<ProtectedRoute> <DashboardLayout>
        <Suspense>
            <Outlet/>
        </Suspense>
      </DashboardLayout></ProtectedRoute>,
      children: [
        {
          index: true,
          element: <IndexPage />,
        },
        {
            path:'reservation', element:<Reservation/>
        },
        {
            path:'pending-orders', element:<Orders/>
        },
        {
            path:'our-menu', element:<Menu/>
        },
        {
            path:'profile', element:<Profile/>
        },
        {
            path:'generate-invoice',
            element:<Invoice/>
        }
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forget-password",
      element: <Reset />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/signup/:id",
      element: <Signup />,
    },
    {
        path:'/signed-up',
        element:<SignUpSuccess/>
    },
    {
        path:'/reset/:variant',
        element:<ResetSuccess/>
    }
  ]);

  return element;
}
