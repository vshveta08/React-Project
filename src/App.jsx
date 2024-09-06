import AppLayout from "./components/layout/AppLayout";
import Attendance from "./pages/Attendance";
import Courses from "./pages/Courses";
import Home from "./pages/home";
import Student from "./components/StudentModal";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Students from "./pages/Students";
import UpdateStudent from "./pages/UpdateStudent";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/students",
          element: <Students />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/attendance",
          element: <Attendance />,
        },
        {
          path: "/updateStudent/:id",
          element: <UpdateStudent />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
