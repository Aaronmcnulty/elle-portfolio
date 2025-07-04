import App from "./App.jsx";
import ErrorPage from "./components/errorPage.jsx";
import LandingPage from "./components/landingPage/LandingPage.jsx";
import Homepage from "./components/homePage/HomePage.jsx";
const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "/home", element: <Homepage /> },
      
    ],
    errorElement: <ErrorPage />,
  },
];

export default routes;
