import { useState } from 'react';
import { Button,TextField, Typography } from '@mui/material';
import Modal from './Modal';
import { Form, redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { COOKIE_KEYS } from '../api/api';


export async function action({request}){
    const formData = await request.formData();
    const date = Object.fromEntries(formData);
    const email = date.email;
    console.log(email);
    Cookies.set(COOKIE_KEYS.EMAIL,email)
    return redirect `/token`;
}

export default function Login(){
 
    const [modalActive,setModalActive] = useState(true)
    



    return(
        <>
        <Modal active ={modalActive} setModalActive={setModalActive} >
          <Form method='post'>
          <Typography sx={{paddingBottom:'20px'}}>
            Введите E-mail для получения ключа!
          </Typography>
        <TextField required size='small'
         id="outlined-basic" 
         label="E-mail" 
         variant="outlined"
         name='email' />
          
        <Button variant="outlined" 
        type='submit' 
        sx={{marginLeft:'20px'}} 
        onClick={()=>setModalActive(false) } >Отправить</Button>
       
          </Form>
         
        
        </Modal>
        </>
    )
}


