import { Button, Typography } from '@mui/material';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COOKIE_KEYS } from './components/api/api';
import Cookies from 'js-cookie';



export default function Header(){
    
  const [isEntered,setEnter] = useState(false)

  useEffect(() => {
    // Проверяем наличие куки при монтировании компонента
    if (Cookies.get(COOKIE_KEYS.ACCOUNT_ID)) {
      setEnter(true);
    }
  }, []);
    return(
        <>
     
        
        <div className="header">
          
              <h1 className='title__films'>Films</h1>
              {/* <PermIdentityRoundedIcon  className="btn__enter" sx={{color:'white'}}  ></PermIdentityRoundedIcon> */}
              {Cookies.get(COOKIE_KEYS.ACCOUNT_ID)||isEntered==true  ? (<Link to={'/unauthorized'}>
                <Button onClick={()=> {setEnter(false);Cookies.remove(COOKIE_KEYS.ACCOUNT_ID)}} > 
                <Typography style={{color:"white"}}>
                  Выйти
                </Typography>
              </Button>
              </Link>):
              (<Link to={'/login'}>
              <Button onClick={()=> {setEnter(true)}}> 
              <Typography style={{color:"white"}}>
                Войти
              </Typography>
            </Button>
            </Link>)
              }
              
            </div>
        </>

    )
    
}
