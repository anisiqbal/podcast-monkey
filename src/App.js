import './App.css';

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Homepage from './pages/homepage/homepage';
import Pricing from './pages/pricing/pricing';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "pricing",
      element: <Pricing />,
    },
  ]);

  return (
   <div>
    <RouterProvider router={router} />
   </div>
  );
}

export default App;
