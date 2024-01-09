import { keyLoader } from "@/api/keysAPI"
import KeygenPage from "@/pages/KeygenPage"
import ValidatePage from "@/pages/ValidatePage"
import { RouteObject, createBrowserRouter } from "react-router-dom"

const routes: RouteObject[] = [
    {
        path: '/',
        element: <KeygenPage/>,
        loader: keyLoader
    },
    {
        path: '/validate',
        element: <ValidatePage />
    }
]

export const router = createBrowserRouter(routes)
