import "./index.css";
import RootLayout from "./components/Root";
import JobPage from "./components/Job/Job";

import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  function handleClickNav() {
    setNavIsOpen((prevState) => !prevState);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout onClick={handleClickNav} isOpen={navIsOpen} />,
      children: [
        { path: "/", element: <JobPage /> },
        { index: true, element: <JobPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
