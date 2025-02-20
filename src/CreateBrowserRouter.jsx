
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";

const RouterNested=()=>{return <Outlet />}
const browserRouters = createBrowserRouter([
  { path: "/createbrowserrouter", element: <h1> createBrowserRouter</h1> },
  {
    path: "/routerNested",
    element: (
      <>
        <h1> routerNested</h1><RouterNested />
      </>
    ),
    children: [
      { path: "test1", element: <h3>test1 children</h3> },
      { path: "test2", element: <h3>test2 children</h3> },
    ],
  },
  { path: "*", element: <h1>Not Found</h1> },
]);

const CreateBrowserRouter = () => {
  return <RouterProvider router={browserRouters} />;
};

export default CreateBrowserRouter;
