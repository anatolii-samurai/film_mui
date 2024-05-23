import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';




export default function Header(){



    return(
        <>
     
        
        <div className="header">
          
              <h1 className='title__films'>Films</h1>
              {/* <PermIdentityRoundedIcon  className="btn__enter" sx={{color:'white'}}  ></PermIdentityRoundedIcon> */}
              <Link to={'/login'}>
                <Button >
                <Typography style={{color:"white"}}>
                  Войти
                </Typography>
              </Button>
              </Link>
              
            </div>
        </>

    )
    
}
