import * as React from 'react';
import {Card,CardActions,CardContent,CardMedia,CardActionArea} from '@mui/material';
import {Box, IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { getMovies,getMoviePathUrl } from '../components/api/api';
import { useContext,useState,useEffect } from 'react';
import { SORT_OPINIONS, TasksContext } from '../context/Context';
import { MoviesPopularContext } from '../context/movies-context';
import { movieImageUrl } from '../components/api/movie-image';
import { Link, } from 'react-router-dom';


 

export function FilmCard() {

  const tasks= useContext(TasksContext)

  const [imagesUrl, setImagesUrl] = useState({})
  const {moviesPopular, setMoviesPopular} = useContext(MoviesPopularContext)
  
 useEffect(()=>{
    let movieListUrl
    const page = tasks.currentPage
    if(tasks.selectByCategory === SORT_OPINIONS.POPULARITY){
      movieListUrl = `https://api.themoviedb.org/3/movie/popular?language=ru&page=${page}`
    }else{
      movieListUrl = `https://api.themoviedb.org/3/movie/top_rated?language=ru&page=${page}`
    }
    async function fetchData() {
      try {
        const data = await getMovies(movieListUrl);
        const details = await getMoviePathUrl() 
        if (data) {
          setMoviesPopular(data.results)
        }
        if (details){
          const url = movieImageUrl(details.images.base_url, details.images.poster_sizes[4])
          setImagesUrl(url)
        }
      } catch (e) {
        console.error(e)
      }
    }

    fetchData();
  },[tasks.currentPage,tasks.selectByCategory]);





  return (
    <Box
    sx={{   
      width: '1000px',
      height: '100%',
      display: 'grid',
      gridTemplateRows: 'repeat(2, 1fr)',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '10px',
      
    }}>
    
    {moviesPopular?.map((movie)=> {

      return <Card sx={{ maxWidth: 300,height:540 }} className='card__film' key={movie.id}>
      <CardActionArea>
        <Link key={movie.id} to={`movie/${movie.id}`}>
        <CardMedia
        className='card__image'
        sx={{ height: 450 }}
        
        image={imagesUrl + movie.poster_path}
        title={movie.title}
        
      />
        </Link>
        </CardActionArea>
      <CardContent className='card__content' sx={{ maxWidth: 350,}} >
        <CardActionArea sx={{ maxWidth: 250 }}>
        <Link key={movie.id} to={`movie/${movie.id}`}>
        <Typography gutterBottom variant="subtitle1" component="div" sx={{lineHeight:'20px'}}>
        {movie.original_title}
        </Typography>
        <Typography color="text.secondary" variant="subtitle2">
          Raiting: {Math.round(movie.vote_average)}
        </Typography> 
        </Link>
          </CardActionArea>
        <CardActions>
        <IconButton>
            <StarBorderIcon/>
        </IconButton>
        </CardActions>
        

        
      </CardContent>
      
    </Card>
    })}
    
    </Box>
    
    
  );
}