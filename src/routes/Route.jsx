import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from '../Body';
import M3 from '../Pages/Model3';
import MS from '../Pages/ModelS';
import MY from '../Pages/ModelY';
import MX from '../Pages/ModelX';
import Cybertruck from '../Pages/CyberTruck';
import Layout from '../Layout';

const route = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/modelS",
                element: <MS />
            },
            {
                path: "/model3",
                element: <M3 />
            },
            {
                path: "/modelY",
                element: <MY />
            },
            {
                path: "/modelX",
                element: <MX />
            },
            {
                path: "/Cybertruck",
                element: <Cybertruck />
            },
        ]
    }  
])

const Routers = () => {
    return (
        <RouterProvider router={route}/>
    )
}

export default Routers;