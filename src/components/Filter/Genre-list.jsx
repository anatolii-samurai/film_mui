import { useContext,useState,useEffect } from "react";
import { TasksContext,TasksDispatchContext } from "../../context/Context";
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { getGenresMovies } from "../api/api";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
export function GenreList(){
    const tasks= useContext(TasksContext)
    const dispatch = useContext(TasksDispatchContext)
    const [genres, setGenres] = useState([])
    
    
    useEffect(()=>{
      async function fetchData() {
        try {
          const data = await getGenresMovies();
          if (data) {
            const genres = data.genres
            setGenres(genres)
          }
  
        } catch (e) {
          console.error(e)
        }
      }
  
      fetchData();
    },[])




   
    return(
        <div className='items__genres'>
            
    <Autocomplete
      multiple
      value={tasks.genres}
      id="checkboxes-tags-demo"
      options={genres}
      disableCloseOnSelect
      onChange={(event, newValue) => {
        dispatch(
            {type: 'set_active_genres', payload: newValue}
        )
      }}
      getOptionLabel={(option) => {return option.name}}
      renderOption={(props, option, { selected }) => (
        <li key={option.name} {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      style={{ width: 296,height:24 }}
      renderInput={(option) => (
        <TextField {...option}  label="Жанры"  placeholder="Favorites" />
      )}
      
    />
  </div>
    )
}