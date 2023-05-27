import './AboutCard.scss';
import {DesktopMacOutlined , DesktopWindows, PhoneAndroid, TabletAndroidTwoTone
} from "@material-ui/icons";
import { FaDesktop, FaMobileAlt,FaChalkboard } from 'react-icons/fa';
import {motion} from 'framer-motion'
const AboutCard = (props) => {
  return (
    <motion.div className="AboutCard" whileHover={ {
      scale: 1.2,
      transition: { duration: 1, ease: 'easeIn', }
    } } >
      <motion.div className="icon">
        {props.data.iconType==="design"?<FaChalkboard size='3.5rem'/>:(props.data.iconType==="webDev"?<FaDesktop size='3.5rem'/>:<FaMobileAlt size='3.5rem'/>)}
      </motion.div>
      <motion.div className="feature-content">
        <h5>{props.data.skill}</h5>
        <p>{props.data.description}</p>
      </motion.div>
    </motion.div>
  )
}

export default AboutCard;
