import Login from "../pages/Login";
import Home from "../pages/Home";
import DetailMenu from "../pages/DetailMenu";
import ProtectedRoute from "./ProtectedRoute";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <DetailMenu />
      </ProtectedRoute>
    )
  },
];

export default routeList;
