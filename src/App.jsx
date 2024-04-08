import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Home from "./Pages/Home/Home";
import './App.css'
import Login from "./Pages/Login/Login";
import Review from "./Pages/Review/Review";

const Layout = () => {
  return (
    <div className="app">
      <Nav />
      <Outlet />
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
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/review",
        element: <Review />,
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App
