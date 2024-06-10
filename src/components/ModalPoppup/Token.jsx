import { useCallback, useState } from 'react';
import { InputLabel,Input,IconButton,InputAdornment,Button } from '@mui/material';
import Modal from './Modal';
import Cookies from 'js-cookie';
import { COOKIE_KEYS } from '../api/api';
import { Visibility,VisibilityOff } from '@mui/icons-material';
import { useNavigate, Form } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import { token as userToken } from '../api/api';
import { getUserId } from '../api/api';


 async function action(){
        const user = await getUserId();
        console.log(user.id);
         Cookies.set(COOKIE_KEYS.ACCOUNT_ID,user.id);   
}

export  function Token(){
    const [values, setValues] = useState({
      password: "",
      showPassword: false,
      id:"user_id"
  });
    const [modalActive,setModalActive] = useState(true)
    const { setUser } = useAuth();
    const navigate = useNavigate()
    const login = useCallback(
      (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-debugger
        if (values.password === userToken ) {
            setUser ({ values });
            action()
            // eslint-disable-next-line no-debugger
            navigate("/");
        // eslint-disable-next-line no-debugger
        } 
        // eslint-disable-next-line no-debugger
        else if(Cookies.get("user_id")){
            setUser ({ values });
            action()
            // eslint-disable-next-line no-debugger
            navigate("/");
        }else{
            // eslint-disable-next-line no-debugger
            navigate("/login");
        }
            
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
            <Form method='post' onSubmit={login} >
           
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
                // value={values.password}
                name='token'
                defaultValue={values.password=userToken}
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
       
       <Button  variant="outlined" type='submit' sx={{marginLeft:'20px'}}  onClick={()=>{setModalActive(false)}}>Отправить</Button>
         
         
          
            </Form>
          
          
       
        
        </Modal>
        </>
    )
}