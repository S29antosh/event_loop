import Home from "./pages/home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EventPage from "./pages/EventPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
