import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cap0 from './pages/Cap0';
import Cap1 from './pages/Cap1';
import ErrorP from './pages/ErrorP';
import R1 from './pages/Raphaela/R1';
import R2 from './pages/Raphaela/R2';
import R3 from './pages/Raphaela/R3';

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
    },
    {
        path: "/artes",
        element: <ErrorP />,
    },
    {
        path: "/mansao",
        element: <Cap0 />,
    },
    {
        path: "/rascunho",
        element: <Cap1 />,
    },
    {
        path: "/RAPHAELA",
        element: <R1 />,
    },
    {
        path: "/raphaela",
        element: <R1 />,
    },
    {
        path: "/Raphaela",
        element: <R1 />,
    },
    {
        path: "/speranza",
        element: <R2 />,
    },
    {
        path: "/carvalho",
        element: <R3 />,
    },
    {
        path: "/CARVALHO",
        element: <R3 />,
    },
    {
        path: "/Carvalho",
        element: <R3 />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
