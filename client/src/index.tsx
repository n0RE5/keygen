import ReactDOM from "react-dom/client"
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <RouterProvider router={router} />
);