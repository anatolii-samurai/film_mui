import { useContext } from "react";
import {TasksDispatchContext } from '../../context/Context';
import { IconButton } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';



export function CloseFilter(){
    const dispatch = useContext(TasksDispatchContext);
    function handleResetFilters() {
        dispatch({
          type:'reset',
        })
      }

    return(
        <IconButton className='close__filter' onClick={handleResetFilters}>
            <ClearIcon/>      
        </IconButton>
    )
}