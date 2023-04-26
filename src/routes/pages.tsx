import Login from "src/pages/Login/Index";
import Home from "src/pages/Home/Index";
import Detail from "src/pages/Home/Detail";

const pageRoutes: {
  path: string;
  isPublic: boolean;
  element: JSX.Element;
  hideHeader?: boolean;
  hideDrawer?: boolean;
}[] = [
  {
    path: "/",
    isPublic: false,
    hideDrawer: true,
    element: <Home />,
  },
  {
    path: "/detail/:market",
    isPublic: false,
    hideDrawer: true,
    element: <Detail />,
  },
  {
    path: "/login",
    isPublic: true,
    hideDrawer: true,
    hideHeader: true,
    element: <Login />,
  },
];

export default pageRoutes;
