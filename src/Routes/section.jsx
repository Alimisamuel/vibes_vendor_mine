import { Outlet, useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import { Dashboard, SharedLayouts } from "../pages/dashboard";
import { DashboardLayout } from "../Layouts";
import { Reset, Login, Signup, ResetPassword } from "../pages/auth";
import SignUpSuccess from "../pages/auth/SignUpSuccess";
import ResetSuccess from "../pages/auth/ResetSucess";
import ProtectedRoute from "./ProtectedRoute";
import TeamLogin from "../pages/auth/TeamLogin";
import NotFound from "../pages/NotFound";

export const IndexPage = lazy(() => import("../pages/dashboard/Dashboard"));
export const Reservation = lazy(() =>
  import("../pages/dashboard/Reservations")
);
export const Orders = lazy(() => import("../pages/dashboard/PendingOrders"));
export const Menu = lazy(() => import("../pages/dashboard/OurMenu"));
export const Profile = lazy(() => import("../pages/dashboard/Profile"));
export const Invoice = lazy(() => import("../pages/dashboard/Invoice"));

export const ChangePassword = lazy(()=> import("../components/Profile/pages/ChangePassword"));
export const HouseRules = lazy(()=> import("../components/Profile/pages/HouseRules"));
export const OnlineReservation = lazy(()=> import("../components/Profile/pages/OnlineReservation"));
export const OpenHours = lazy(()=> import("../components/Profile/pages/OpenHours"));
export const ProfileDetails = lazy(()=> import("../components/Profile/pages/ProfileDetails"));
export const Revenue = lazy(()=> import("../components/Profile/pages/Revenue"));
export const Taxes = lazy(()=> import("../components/Profile/pages/Taxes"));
export const Team = lazy(()=> import("../components/Profile/pages/Team"));

export default function Routes() {
  let element = useRoutes([
    {
      element: (
        <ProtectedRoute>
          {" "}
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: <IndexPage />,
        },
        {
          path: "reservation",
          element: <Reservation />,
        },
        {
          path: "pending-orders",
          element: <Orders />,
        },
        {
          path: "our-menu",
          element: <Menu />,
        },
        {
       
          element: <Profile />,
          children:[
            {
              path:'profile',
              element:<Revenue/>,
            },
        
            {
              path:'profile/change-password',
              element:<ChangePassword/>
            },
            {
              path:'profile/profile-details',
              element:<ProfileDetails/>
            },
            {
              path:'profile/online-reservation',
              element:<OnlineReservation/>
            },
            {
              path:'profile/open-hours',
              element:<OpenHours/>
            },
            {
              path:'profile/team',
              element:<Team/>
            },
            {
              path:'profile/taxes',
              element:<Taxes/>
            },
            {
              path:'profile/house-rules',
              element:<HouseRules/>
            },
          ]
        },
        {
          path: "generate-invoice",
          element: <Invoice />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/forgot-password",
      element: <Reset />,
    },
    {
      path: "/reset-password/:id",
      element: <ResetPassword />,
    },
    {
      path: "/signup/:id",
      element: <Signup />,
    },
    {
      path: "/signed-up",
      element: <SignUpSuccess />,
    },
    {
      path: "/reset/:variant",
      element: <ResetSuccess />,
    },
    {
      path: "/login/team",
      element: <TeamLogin />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
}
