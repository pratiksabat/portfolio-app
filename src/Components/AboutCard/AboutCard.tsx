import Card from 'react-animated-3d-card'
import './AboutCard.scss';
import { DesktopMacOutlined , DesktopWindows, PhoneAndroid, TabletAndroidTwoTone
} from "@material-ui/icons";
const AboutCard = (props) => {
  return (
    <div className="AboutCard">
      <div className="icon">
        {props.data.iconType==="design"?<DesktopMacOutlined style={{fontSize:'3.5rem'}}/>:(props.data.iconType==="webDev"?<DesktopWindows style={{fontSize:'3.5rem'}}/>:<TabletAndroidTwoTone style={{fontSize:'3.5rem'}}/>)}
      </div>
      <div className="feature-content">
        <h5>{props.data.skill}</h5>
        <p>{props.data.description}</p>
      </div>
    </div>
  )
}

export default AboutCard;
