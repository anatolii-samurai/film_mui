import { useCallback, useState } from 'react';
import { Button,TextField, Typography } from '@mui/material';
import Modal from './Modal';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';

export default function Token(){
    const [username, setUsername] = useState("");
    const [modalActive,setModalActive] = useState(true)
    const { setUser } = useAuth();
    const navigate = useNavigate()
    const login = useCallback(
      (e) => {
        e.preventDefault();
        setUser ({ username });
        navigate("/");
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [setUser, username]
    );
 
   
    return(
        <>
        
        <Modal active ={modalActive} setModalActive={setModalActive}   >
          <form onSubmit={login}>
          <Typography sx={{paddingBottom:'20px'}}>
            Введите ключ!
          </Typography>
        <TextField required value={username} onChange={(e) => setUsername(e.target.value)}
            size='small' id="outlined-basic" inputProps={{
          type: "text",
        }} label="Enter token" variant="outlined"   />
       
       <Button variant="outlined" type='submit' sx={{marginLeft:'20px'}}  onClick={()=>{setModalActive(false)}}>Отправить</Button>
          </form>
          
       
        
        </Modal>
        </>
    )
}