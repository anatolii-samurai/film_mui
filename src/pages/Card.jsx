import {Card,CardActions,CardContent,CardMedia,CardActionArea} from '@mui/material';
import {Box, IconButton} from '@mui/material';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { getMovies,getMoviePathUrl, COOKIE_KEYS, controlFavouriteMovies } from '../components/api/api';
import { useContext,useState,useEffect } from 'react';
import { SORT_OPINIONS, TasksContext, TasksDispatchContext } from '../context/Context';
import { MoviesPopularContext } from '../context/movies-context';
import { movieImageUrl } from '../components/api/movie-image';
import { Link, } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getUserId } from '../components/api/api';
 import { Star } from '@mui/icons-material';
import { getMoviesByName } from '../components/api/api';

export function FilmCard() {
  
  const tasks = useContext(TasksContext);
 
  const dispatch = useContext(TasksDispatchContext)
  const [favouriteMovies, setFavouriteMovies] = useState(new Set());
  const [imagesUrl, setImagesUrl] = useState({});
  const {moviesPopular, setMoviesPopular} = useContext(MoviesPopularContext);
  
  
  const accountId = Cookies.get(COOKIE_KEYS.ACCOUNT_ID);
 
  useEffect(() => {
    async function fetchUserAndFavorites() {
      const user = await getUserId();
      Cookies.set(COOKIE_KEYS.ACCOUNT_ID, user.id);

      const accountId = user.id;
      const favouritesUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`;
      const favouriteMoviesData = await getMovies(favouritesUrl);
      if (favouriteMoviesData) {
        const favouriteMovieIds = new Set(favouriteMoviesData.results.map(movie => movie.id));
        setFavouriteMovies(favouriteMovieIds);
      }
    }
    fetchUserAndFavorites();
  }, []);

  const handleFavouriteClick = async (movieId) => {
    const isFavourite = favouriteMovies.has(movieId);
    dispatch({type:'getFavouriteMovie',favouriteMovie:isFavourite})
    await controlFavouriteMovies(movieId, !isFavourite, accountId);
    setFavouriteMovies((prev) => {
      const updated = new Set(prev);
      if (isFavourite) {
        updated.delete(movieId);
      } else {
        updated.add(movieId);
      }
      return updated;
    });
  };

 
  
  



 useEffect(()=>{
    async function action(){
      const user = await getUserId();
      Cookies.set(COOKIE_KEYS.ACCOUNT_ID,user.id);   
    }
    action();
    const searchName = tasks.searchMovies
    async function searchMovieByName(){
      const search = await getMoviesByName(searchName);debugger
      setMoviesPopular(search.results);debugger
    } 
    searchMovieByName();debugger
    let movieListUrl
    const page = tasks.currentPage
    if(tasks.selectByCategory === SORT_OPINIONS.POPULARITY && tasks.searchMovies === null){debugger
      movieListUrl = `https://api.themoviedb.org/3/movie/popular?language=ru-RU&page=${page}`
    }else if(tasks.selectByCategory === SORT_OPINIONS.RATING){debugger
      movieListUrl = `https://api.themoviedb.org/3/movie/top_rated?language=ru-RU&page=${page}`
    }else if(tasks.selectByCategory === SORT_OPINIONS.FAVOURITE){debugger
      movieListUrl = `https://api.themoviedb.org/3/account/${accountId}/favorite/movies`
    }else if(tasks.searchMovies === searchName) {debugger
      movieListUrl = `https://api.themoviedb.org/3/search/movie?query=${searchName}&language=ru-RU`
    }
    async function fetchData() {
      try {
        const data = await getMovies(movieListUrl);debugger
        const details = await getMoviePathUrl();

        if (data) {
          setMoviesPopular(data.results);debugger
        }
        if (details){debugger
          const url = movieImageUrl(details.images.base_url, details.images.poster_sizes[4])
          setImagesUrl(url)
        }
      } catch (e) {
        console.error(e)
      }
    }
    
    fetchData();
  },[tasks.currentPage,tasks.selectByCategory,setMoviesPopular,accountId,tasks.searchMovies]);





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
       const isFavourite = favouriteMovies.has(movie.id);
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
        {movie.title}
        </Typography>
        <Typography color="text.secondary" variant="subtitle2">
          Raiting: {Math.round(movie.vote_average)}
        </Typography> 
        </Link>
          </CardActionArea>
        <CardActions>

         <IconButton onClick={()=>handleFavouriteClick(movie.id)}>
         {isFavourite ? <Star/>:<StarBorderIcon/>}
      </IconButton >
        
        </CardActions>
        

        
      </CardContent>
      
    </Card>
    })}
    
    </Box>
    
    
  );
}