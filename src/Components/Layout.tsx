import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  useEffect(() => {
    document.title = "SkillSwapy | Share Skills, Learn Together";
  }, []);
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
      <Footer />
    </>
  );
};

export default Layout;