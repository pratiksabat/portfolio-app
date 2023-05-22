import './AwardCard.scss';
import { motion } from 'framer-motion';
// import abc from "../../assets/logo1.png"
const HiDLogo = require('../../assets/hashedin-logo.png')
const BsGLogo = require('../../assets/bsg-logo.png')

const AwardCard = (props) => {
  return (
    <motion.div className='AwardCard' whileHover={ {
      scale: 1.2,
      transition: { duration: 1 },
}}>
      <motion.div className="award-icon">
      <img src={HiDLogo} alt="" height="50px" width="50px" style={{padding:'3px'}} />
      </motion.div>
      <motion.div className="award-info">
        <motion.div className="name">
          <h3>{props.data.award}</h3>
        </motion.div>
        <motion.div className="place">
          <p>{props.data.company}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AwardCard;
