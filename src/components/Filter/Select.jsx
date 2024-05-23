import React from "react";
import { Box,Slider,Typography } from "@mui/material";
import { useContext } from "react";
import { TasksContext,TasksDispatchContext } from "../../context/Context";
import { SORT_OPINIONS } from "../../context/Context";
import {FormControl,InputLabel,Select,MenuItem} from "@mui/material";




let nextId = 0
const sortBy = [
  {
    name: 'Популярности',
    value: SORT_OPINIONS.POPULARITY
  },
  {
    name: 'Рейтингу',
    value: SORT_OPINIONS.RATING
  },
]

export const SelectCategory = () =>{
  const tasks= useContext(TasksContext)
  const dispatch = useContext(TasksDispatchContext)
  return (
    <Box sx={{padding: '16px'}}>
      <FormControl variant='standard' fullWidth>
        <InputLabel variant='standard' htmlFor='sort-by-option-label'>
          Сортировать по:
        </InputLabel>
        <Select
            labelId='sort-by-option-label'
            defaultValue='byPopularity'
            value={tasks.selectByCategory}
            id='set_sort_popularity'
            onChange={(e) => {
              dispatch({
                type: 'set_sort_popularity',
                payload: e.target.value})
            }}
        >
          {sortBy.map((item) => {
            return (
                <MenuItem key={nextId++} value={item.value}>{item.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
)
}
export function RangeSlider() {
  const [value, setValue] = React.useState([0, 2024]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }} className="sort__year" >
       <Typography id="input-slider" gutterBottom>
       Год релиза:
      </Typography>
      <Slider
        
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        marks
        min={1955}
        max={2023}
        step={10}
        // getAriaValueText={valuetext}
      />
    </Box>
  );
}
