import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import IndexPage from "./Components/IndexPage/IndexPage";
import "./index.css";
import Pizza from "./Components/Pages/Pizza/Pizza";
import Drinks from "./Components/Pages/Drinks/Drinks";
import Sides from "./Components/Pages/Sides/Sides";
import Desserts from "./Components/Pages/Desserts/Desserts";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <IndexPage />,
        },
        {
          path: "/pizza",
          element: <Pizza />,
        },
        {
          path: "/drinks",
          element: <Drinks />,
        },
        {
          path: "/sides",
          element: <Sides />,
        },
        {
          path: "/desserts",
          element: <Desserts />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
