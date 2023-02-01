import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import AboutUs from "./components/Aboutus"
import Error from "./components/Error"
import ContactUs from "./components/ContactUs"
const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const Router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [{
            path: '/',
            element: <Body />
        },
        {
            path: '/about',
            element: <AboutUs />
        },
        {
            path: '/contact',
            element: <ContactUs />
        },
        ]
    }

])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={Router} />)
