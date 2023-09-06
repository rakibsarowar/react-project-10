import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from './components/Layout/main';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/login',
        element: <Login></Login>
      },
      {

      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
