import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

function RootLayout({ onClick, isOpen }) {
  return (
    <>
      <Header onClick={onClick} navIsOpen={isOpen} />
      <Outlet />
    </>
  );
}

export default RootLayout;
