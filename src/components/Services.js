import Header from "./Header";
import { Outlet, Link } from "react-router-dom";
import { Card } from "@mui/material";
import Button from "@mui/material/Button";

const Services = () => {
  return (
    <>
      {/* <Header /> */}
      <h1>This is Services page...</h1>
      <Link to="diagnosis">
        <Button variant="contained">Diagnoses</Button>
      </Link>
      <Outlet />
    </>
  );
};

export default Services;
