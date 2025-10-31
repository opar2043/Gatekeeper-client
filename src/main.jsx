import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Root from "./Components/Root/Root";
import Error from "./Components/Root/Error";
import Home from "./Components/Root/Home";
import Login from "./Components/Firebase/Login";
import Register from "./Components/Firebase/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import AllUser from "./Components/Dashboard/AllUser";
import MarchentData from "./Components/Dashboard/SubmittedData/MarchentData";
import PaymentData from "./Components/Dashboard/SubmittedData/PaymentData";
import RecuringData from "./Components/Dashboard/SubmittedData/RecuringData";
import Overview from "./Components/Dashboard/Overview";
import AuthProvider from "./Components/Firebase/AuthProvider";
import MarchantSubmission from "./Components/Dashboard/UserSubmission/MarchantSubmission";
import PaymentSubmission from "./Components/Dashboard/UserSubmission/PaymentSubmission";
// import Overview from "./Components/Dashboard/Overview";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/all-users",
        element: <AllUser></AllUser>,
      },
      {
        path: "/dashboard/merchant-data",
        element: <MarchentData></MarchentData>,
      },
      {
        path: "/dashboard/payment-data",
        element: <PaymentData></PaymentData>,
      },
      {
        path: "/dashboard/recuring-data",
        element: <RecuringData></RecuringData>,
      },
      {
        path: "/dashboard/user-merchant-data",
        element: <MarchantSubmission></MarchantSubmission>
      },
      {
        path: "/dashboard/user-payment-data",
        element: <PaymentSubmission></PaymentSubmission>
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
