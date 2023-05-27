import {
  HomeOutlined,
  MenuBookOutlined,
  PersonOutline,
  WorkOutline,
  PagesTwoTone
} from "@material-ui/icons";
import { FaHome, FaUserTie, FaBriefcase, FaBookOpen, FaGoogleDrive } from 'react-icons/fa'
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./SideBar.scss";
const Logo = require("../../assets/logo1.png");

const SideBar = ({abc}) => {
  const ServicesRef = useRef(null);
  const performOnClick = (text: string) => {
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
        <div className="nav-icons" onClick={ () => performOnClick("Home") }>
          {/* <HomeOutlined
            onClick={() => performOnClick("Home")}
            fontSize="large"
            titleAccess="Home"
          /> */}
          <FaHome title='Home' size={30}/>
        </div>
        <div className="nav-icons" onClick={ () => performOnClick("About") }>
          {/* <PersonOutline
            onClick={() => performOnClick("About")}
            fontSize="large"
            titleAccess="About"
          /> */}
          <FaUserTie title='About' size={ 30 } />
        </div>
        <div className="nav-icons" onClick={ () => {
          performOnClick("Experience");
        } }>
          {/* <WorkOutline
            onClick={() => {
              performOnClick("Experience");
            }}
            fontSize="large"
            titleAccess="Experience"
          /> */}
          <FaBriefcase title='Experience' size={ 30 } />
        </div>
        <div className="nav-icons" onClick={ () => performOnClick("Education") }>
          {/* <MenuBookOutlined
            onClick={() => performOnClick("Education")}
            fontSize="large"
            titleAccess="Education"
          /> */}
          <FaBookOpen title='Education' size={ 30 } />
        </div>
        <div className="nav-icons" onClick={ () => performOnClick("Work") }>
          {/* <PagesTwoTone
            onClick={() => performOnClick("Work")}
            fontSize="large"
            titleAccess="Work"
          /> */}
          <FaGoogleDrive title='Work' size={ 30 } />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
