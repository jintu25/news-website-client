import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            {/* <App></App> */}
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;