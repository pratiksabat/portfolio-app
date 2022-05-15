import './AwardCard.scss';
// import abc from "../../assets/logo1.png"
const HiDLogo = require('../../assets/hashedin-logo.png')
const BsGLogo = require('../../assets/bsg-logo.png')

const AwardCard = (props) => {
  return (
    <div className='AwardCard'>
      <div className="award-icon">
      <img src={HiDLogo} alt="" height="50px" width="50px" style={{padding:'3px'}} />
      </div>
      <div className="award-info">
        <div className="name">
          <h3>{props.data.award}</h3>
        </div>
        <div className="place">
          <p>{props.data.company}</p>
        </div>
      </div>
    </div>
  )
}

export default AwardCard;
