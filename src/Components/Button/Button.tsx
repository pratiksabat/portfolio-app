import './Button.scss';
import MaterialButton from '@material-ui/core/Button';
import {CloudDownloadTwoTone} from "@material-ui/icons";

const Button = (props) => (
  <MaterialButton style={{
    borderRadius: 35,
    backgroundColor: "#f5941c",
    fontSize: "15px",
    width: '50%',
    height: '100%',
    color:"white"
}}
startIcon={<CloudDownloadTwoTone/>}
variant="contained">
    {props.text}
  </MaterialButton>
);

export default Button;
