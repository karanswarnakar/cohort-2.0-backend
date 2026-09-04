import { createBrowserRouter, Navigate } from "react-router";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import Protected from "../features/auth/components/Protected";
import Dashboard from "../features/chat/pages/DashBoard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected><Dashboard /></Protected>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element:<Register/>
    },
    {
        path: "/*",
        element: <main className="h-[100vh] text-gray-600 text-3xl font-bold flex justify-center items-center">
            404 Page not found 
        </main>
    }
])