import { Form } from "react-router-dom"
import { InputLabel,Input,Button } from "@mui/material"
import { useContext, useState } from "react"
import { getMoviesByName } from "../api/api"
import { MoviesPopularContext } from "../../context/movies-context"



export const SearchInput = () => {
    const [value,setValue] = useState('')
    const {setMoviesPopular} = useContext(MoviesPopularContext)
   
    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    async function handleSearch  (e) {debugger
        e.preventDefault()
        const search = await getMoviesByName(value);debugger
        setMoviesPopular(search.result);debugger
        setValue('')
        e.preventDefault()

    }

    return(
        <>
        <Form   onSubmit={handleSearch}>
           
           <InputLabel sx={{paddingBottom:'5px'}} >
             Введите название фильма
           </InputLabel>
           <Input
             name='search'
             value={value}  
             onChange={handleInputChange} 
             />
        
        <Button  variant="outlined" type='submit' sx={{marginLeft:'20px'}} >Поиск</Button>
        </Form>
        </>
    )
}