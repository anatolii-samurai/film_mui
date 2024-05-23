import { useState } from 'react';
import { Button,TextField, Typography } from '@mui/material';
import Modal from './Modal';
import { Link } from 'react-router-dom';




export default function Login(){
    const [email,setEmail] = useState('')
    const [modalActive,setModalActive] = useState(true)

    return(
        <>
        <Modal active ={modalActive} setModalActive={setModalActive} >
          <Typography sx={{paddingBottom:'20px'}}>
            Введите E-mail для получения ключа!
          </Typography>
        <TextField required size='small' value={email}  onChange={(e) => setEmail(e.target.value)} id="outlined-basic" inputProps={{
          type: "email",
        }} label="E-mail" variant="outlined" />
        <Link to="/token">
        <Button variant="outlined" type='submit' sx={{marginLeft:'20px'}} onClick={()=>setModalActive(false) } >Отправить</Button>
        </Link>
        
        </Modal>
        </>
    )
}


