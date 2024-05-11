import Home from "./pages/home";
import Events from "./pages/events";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events/:eventId",
      element: <Events />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
