import { createBrowserRouter } from "react-router-dom";
import HomePage, { homeLoader } from "./home";
import ErrorPageHome from "./home/error-page";
import UserPage, { userLoader } from "./user";
import ErrorPageUser from "./user/error-page";

const router = createBrowserRouter([
  {
    path: "/",    
    loader: homeLoader,
    element: <HomePage/>,
    errorElement: <ErrorPageHome/>
  },
  {
    path: "user/:id",
    loader: userLoader,
    element: <UserPage/>,
    errorElement: <ErrorPageUser/>
  }
]);

export default router;