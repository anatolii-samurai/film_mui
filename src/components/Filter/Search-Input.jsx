import { Form } from "react-router-dom"
import { InputLabel,Input,Button } from "@mui/material"
import { useContext, useState } from "react"
import {  getMoviesByName } from "../api/api"
import { MoviesPopularContext } from "../../context/movies-context"

import { TasksDispatchContext } from "../../context/Context"

export const SearchInput = () => {
    const [value,setValue] = useState('')
    const {setMoviesPopular} = useContext(MoviesPopularContext)
    // const tasks = useContext(TasksContext);
    const dispatch = useContext(TasksDispatchContext)

    const handleInputChange = (e) => {
        setValue(e.target.value)
        
    }
    
    async function handleSearch  (e) {debugger
        e.preventDefault()
        const search = await getMoviesByName(value);debugger
        setMoviesPopular(search.results);debugger
        dispatch({type:'set_search_film',searchMovies: value});debugger
        setValue('')
        e.preventDefault()
    
    }
    // useEffect(()=>{
    //     const searchName = tasks.searchMovies
    //     async function searchMovieByName(){
    //       const search = await getMoviesByName(searchName);debugger
    //       setMoviesPopular(search.results);debugger
    //     } 
    //     searchMovieByName();debugger
    //     let movieListUrl
    //     movieListUrl = `https://api.themoviedb.org/3/search/movie?query=${value}&language=ru-RU`
    //     async function fetchData() {
    //       try {
    //         const data = await getMovies(movieListUrl);debugger
    //         const details = await getMoviePathUrl();
    
    //         if (data) {
    //           setMoviesPopular(data.results);debugger
    //         }
    //         if (details){debugger
    //           const url = movieImageUrl(details.images.base_url, details.images.poster_sizes[4])
    //           setImagesUrl(url)
    //         }
    //       } catch (e) {
    //         console.error(e)
    //       }
    //     }
        
    //     fetchData();
    //   },[setMoviesPopular,dispatch,value,setImagesUrl]);
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