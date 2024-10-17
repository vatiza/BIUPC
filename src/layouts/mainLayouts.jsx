import { Outlet } from "react-router-dom";
import Nav from "../components/shared/navbar/navbar";
import Footer from "../components/shared/footer/footer";

const MainLayouts = () => {
  return (
    <div>
      <Nav />
     <div className="mx-4 my-2"> <Outlet /></div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
