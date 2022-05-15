import {
  HomeOutlined,
  MenuBookOutlined,
  PersonOutline,
  WorkOutline
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./SideBar.scss";
const Logo = require("../../assets/logo1.png");

const SideBar = () => {
  const performOnClick = (text: string) => {
    return <Link to={text} />;
  };
  return (
    <div className="SideBar">
      <div className="logo">
        <img src={Logo} alt="" height="100%" width="100%" />
      </div>
      <div className="break"></div>
      <div className="nav-links">
        <div className="nav-icons">
          <HomeOutlined
            onClick={() => performOnClick("Home")}
            fontSize="large"
          />
        </div>
        <div className="nav-icons">
          <PersonOutline
            onClick={() => performOnClick("Person")}
            fontSize="large"
          />
        </div>
        <div className="nav-icons">
          <WorkOutline
            onClick={() => {
              performOnClick("Work");
            }}
            fontSize="large"
          />
        </div>
        <div className="nav-icons">
          <MenuBookOutlined
            onClick={() => performOnClick("MenuBook")}
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
