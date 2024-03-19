import { createBrowserRouter } from "react-router-dom";
import { Posts } from "../pages/posts";
import { PostDetails } from "../pages/postDetails/ui";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
  },
  {
    path: "/post/:id",
    element: <PostDetails />,
  },
]);
