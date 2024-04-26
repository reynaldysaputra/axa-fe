import { createBrowserRouter } from "react-router-dom";
import HomePage, { homeLoader } from "./home";
import ErrorPageHome from "./home/error-page";
import UserPage, { userLoader } from "./user";
import UserAlbumPage, { userPhotosOfAlbumLoader } from "./user/album";
import ErrorPageUserAlbum from "./user/album/error-page";
import ErrorPageUser from "./user/error-page";
import UserPostPage, { userPostLoader } from "./user/post";
import ErrorPageUserPost from "./user/post/error-page";

const router = createBrowserRouter([
  {
    path: "/",    
    loader: homeLoader,
    element: <HomePage/>,
    errorElement: <ErrorPageHome/>
  },
  {
    path: "user/:idUser",
    loader: userLoader,
    element: <UserPage/>,
    errorElement: <ErrorPageUser/>
  },
  {
    path: "user/:idUser/post/:idPost",
    loader: userPostLoader,
    element: <UserPostPage/>,
    errorElement: <ErrorPageUserPost/>
  },
  {
    path: "user/:idUser/album/:idAlbum",
    loader: userPhotosOfAlbumLoader,
    element: <UserAlbumPage/>,
    errorElement: <ErrorPageUserAlbum/>
  }
]);

export default router;