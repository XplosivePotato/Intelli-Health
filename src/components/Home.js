import Header from "./Header";
import { Route, Outlet, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* <Header /> */}
      <h1>This is HOME page...</h1>
      <p>
        Welcome to Intell-Health, our AI-based health diagnostic system that not
        only gives people trustworthy and accurate health evaluations but also
        supports physicians in providing prompt and accurate diagnoses. Our
        system analyses a range of health data inputs, such as symptoms, medical
        history, and lab test results, using advanced algorithms and machine
        learning models. This analysis results in personalised health reports
        and recommendations that can help identify potential health issues
        before they become serious. You may quickly and simply gain a better
        understanding of your health state and make wise decisions regarding
        your health with the help of Intell-Health.
      </p>
      <div className="submit">
        <Link to="/services" className="btn">
          <Button variant="contained" className="btn-style">
            Press me!
          </Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
