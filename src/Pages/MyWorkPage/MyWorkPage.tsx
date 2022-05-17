import { Button } from '@material-ui/core';
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import React, { FC, useEffect, useState } from 'react';
import {
  DateRange,
  HomeOutlined,
  Language,
  MenuBookOutlined,
  PersonOutline,
  WorkOutline
} from "@material-ui/icons";
import './MyWorkPage.scss';
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
    // <div className='MyWorkPage'>
    //   {/* {
    //     data.map((obj)=><p>{obj}</p>)
    //   }
    //   <Button onClick={doSomething} placeholder="ABCDB"/> */}
    // </div>
    <div className="container">
      {
        data && data.data && data.data.map((obj) => {
          return <div className="cards" key={obj.id}>
            <div className="card-item">
              <div className="card-image">
                <img src={obj.owner.avatar_url} alt="" />
              </div>
              <div className="card-info">
                <h2 className="card-title">{obj.name}</h2>
                <p className="card-intro">{obj.description}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = obj.html_url;
                  }}
                > View Repo</button>
                <Chip
                  avatar={<DateRange/>}
                  label={obj.created_at}
                // onClick={handleClick}
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = obj.clone_url;
                  }}
                > Clone Repo</button>
                <Chip
                  avatar={<Language/>}
                  label={obj.language}
                // onClick={handleClick}
                />
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default MyWorkPage;
