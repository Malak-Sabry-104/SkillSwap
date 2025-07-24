import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

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
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
