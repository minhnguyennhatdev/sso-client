import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Login } from './pages/login';
import { Register } from './pages/register';


const Redirect = () => {
  const state = new URLSearchParams(window?.location?.search).get('state');
  return <Navigate to={`/login?state=${state}`} />
}

const router = createBrowserRouter([
  {
    path: "/*",
    // redirect to login page
    element: <Redirect />
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);