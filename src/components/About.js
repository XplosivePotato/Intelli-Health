import Header from "./Header";
import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <>
      {/* <Header /> */}
      <h1>This is ABOUT page...</h1>
      <Outlet />
    </>
  );
};

export default About;
