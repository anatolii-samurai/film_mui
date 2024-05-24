import { useCallback, useState } from 'react';
import { InputLabel,Input,IconButton,InputAdornment,Button } from '@mui/material';
import Modal from './Modal';

import { Visibility,VisibilityOff } from '@mui/icons-material';


import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { token } from '../api/api';



export default function Token(){
    // const [user, setUserToken] = useState("");
    const [values, setValues] = useState({
      password: "",
      showPassword: false,
  });
    const [modalActive,setModalActive] = useState(true)
    const { setUser } = useAuth();
    const navigate = useNavigate()
    const login = useCallback(
      (e) => {
        e.preventDefault();
        
          setUser ({ values });
          navigate("/");
        
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [setUser, values]
    );
    
    const handleClickShowPassword = () => {
      setValues({
          ...values,
          showPassword: !values.showPassword,
      });
  };

  const handleMouseDownPassword = (event) => {
      event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
      setValues({
          ...values,
          [prop]: event.target.value,
      });
  };
   
    return(
        <>
        
        <Modal active ={modalActive} setModalActive={setModalActive}   >
          <form onSubmit={login}>
          <InputLabel sx={{paddingBottom:'20px'}} htmlFor="standard-adornment-password">
            Введите ключ!
          </InputLabel>
          <Input
                type={
                    values.showPassword
                        ? "text"
                        : "password"
                }
                onChange={handlePasswordChange("password")}
                defaultValue={token}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            onClick={
                                handleClickShowPassword
                            }
                            onMouseDown={
                                handleMouseDownPassword
                            }
                        >
                            {values.showPassword ? (
                                <Visibility />
                            ) : (
                                <VisibilityOff  />
                            )}
                        </IconButton>
                    </InputAdornment>
                }
            />
       
       <Button variant="outlined" type='submit' sx={{marginLeft:'20px'}}  onClick={()=>{setModalActive(false)}}>Отправить</Button>
         
         
          </form>
          
       
        
        </Modal>
        </>
    )
}