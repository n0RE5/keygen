import KeygenPage from "@/pages/KeygenPage"
import { RouteObject, createBrowserRouter } from "react-router-dom"

const routes: RouteObject[] = [
    {
        path: '/',
        element: <KeygenPage/>,
    }
]

export const router = createBrowserRouter(routes)
