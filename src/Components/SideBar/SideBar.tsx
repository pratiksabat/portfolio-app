import {
  HomeOutlined,
  MenuBookOutlined,
  PersonOutline,
  WorkOutline,
  PagesTwoTone
} from "@material-ui/icons";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";
const Logo = require("../../assets/logo1.png");

const SideBar = ({abc}) => {
  const ServicesRef = useRef(null);
  const performOnClick = (text: string) => {
    // console.log(text);
    abc(text)
    // window.scrollTo({
    //   top: ServicesRef.current.offsetTop,
    //   behavior: "smooth",
    //   // You can also assign value "auto"
    //   // to the behavior parameter.
    // });
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
            titleAccess="Home"
          />
        </div>
        <div className="nav-icons">
          <PersonOutline
            onClick={() => performOnClick("About")}
            fontSize="large"
            titleAccess="About"
          />
        </div>
        <div className="nav-icons">
          <WorkOutline
            onClick={() => {
              performOnClick("Experience");
            }}
            fontSize="large"
            titleAccess="Experience"
          />
        </div>
        <div className="nav-icons">
          <MenuBookOutlined
            onClick={() => performOnClick("Education")}
            fontSize="large"
            titleAccess="Education"
          />
        </div>
        <div className="nav-icons">
          <PagesTwoTone
            onClick={() => performOnClick("Work")}
            fontSize="large"
            titleAccess="Work"
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
