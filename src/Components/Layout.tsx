import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
        <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="dark"
        pauseOnHover
        hideProgressBar={false}
      />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
