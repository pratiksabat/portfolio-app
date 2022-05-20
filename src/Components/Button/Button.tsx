import './Button.scss';
import MaterialButton from '@material-ui/core/Button';
import {CloudDownloadTwoTone} from "@material-ui/icons";
const obj = {
  borderRadius: 35,
  backgroundColor: "#f5941c",
  fontSize: "15px",
  width: '50%',
  height: '100%',
  color:"white"
}
const obj1 = {
  borderRadius: 35,
  backgroundColor: "#f5941c",
  fontSize: "12px",
  width: '50%',
  height: '50%',
  color:"white"
}
const Button = (props) => (
  <MaterialButton style={props.text==='Download CV'?obj:obj1}
startIcon={<CloudDownloadTwoTone/>}
variant="contained"
onClick={props.performOperation}
>
    {props.text}
  </MaterialButton>
);

export default Button;
