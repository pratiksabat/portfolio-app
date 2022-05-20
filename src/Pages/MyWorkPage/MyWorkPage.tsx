import Chip from "@material-ui/core/Chip";
import { useEffect, useState } from 'react';
import {
  DateRangeTwoTone,
  LanguageTwoTone} from "@material-ui/icons";
import './MyWorkPage.scss';
import Button from "../../Components/Button/Button";
const axios = require('axios');

const MyWorkPage = () => {
  const [data, setData] = useState({
    data: [{
      name: "",
      full_name: "",
      id: 0,
      clone_url: '',
      html_url: '',
      language: '',
      owner:{avatar_url: ''},
      description: '',
      created_at: ''
    }]
  });
  useEffect(() => {
    (async () => {
      const doSomething = async () => {
        const res = await axios.get(`https://api.github.com/users/pratiksabat/repos`);
        // console.log(res);
        setData(res);
      }
      await doSomething();
    })();

    return () => {
      // this now gets called when the component unmounts
    };

  }, [])


  console.log(data);
  return (
    <div className='MyWorkPage'>
      <h1>My Works</h1> 
    <div className="container">
      {
        data && data.data && data.data.map((obj) => {
          const abc =(e) => {
            e.preventDefault();
            window.location.href = obj.html_url;
          }
          const abc1 =(e) => {
            e.preventDefault();
            window.location.href = obj.clone_url;
          }
          return <div className="cards" key={obj.id}>
            <div className="card-item">
              <div className="card-image">
                <img src={obj.owner.avatar_url} alt="" />
              </div>
              <div className="card-info">
                <h2 className="card-title">{obj.name}</h2>
                <div className="btn-styles">
                <Button text="View" performOperation={abc}/>
                <Button text="Clone" performOperation={abc1}/>
                </div>
                <div className="chip-styles">
                <Chip
                 label={new Date(obj.created_at).getDate()+'/'+new Date(obj.created_at).getMonth()+'/'+new Date(obj.created_at).getFullYear()}
                  avatar={<DateRangeTwoTone/>}
                  style={{backgroundColor:'#f5941c',color:'white', width:'50%', height:'80%'}}
                />
                <Chip
                  avatar={<LanguageTwoTone/>}
                  label={obj.language}
                  style={{backgroundColor:'#f5941c',color:'white', width:'50%', height:'80%'}}
                />
                </div>
              </div>
            </div>
          </div>
        })
      }
    </div>
    </div>
  )
}

export default MyWorkPage;
