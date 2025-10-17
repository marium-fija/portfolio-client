import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import HomeLayouts from "../HomeLayouts/HomeLayouts";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import ProjectDetails from "../components/ProjectDetails";

export const route = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/projects",
                Component: Projects,
            },
            {
                path: "/projects/:id",
                Component: ProjectDetails
            },
            {
                path: "/contact",
                Component: Contact
            }
        ]

    }
])