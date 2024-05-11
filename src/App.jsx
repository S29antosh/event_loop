import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventPage from "./pages/EventPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/events/:eventId",
      element: <EventPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
