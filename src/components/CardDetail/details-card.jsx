
import { useLoaderData,Link } from "react-router-dom";
import { movieImageUrl } from "../api/movie-image" ;
import { Box,Typography,IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MovieCardDetailsTable from "../MovieCardDetail/movie_card_details";




 export default function CardDetail(){
  const {movieDetails, movieCredits, moviePath} = useLoaderData()
  

  const imgUrl = movieImageUrl(moviePath.images.base_url, moviePath.images.poster_sizes[4])
 

    return(
      <Box
      sx={{
        marginTop:'20px',
        width:'700px',
        display: "grid",
        gridTemplateColumns:'repeat(3,1fr)',
        gridTemplateRows:'20px 1fr',
        columnGap:'20px'
       
      }}
    >
      <Link to="/">
          <IconButton>
            <ArrowBackIcon />
          </IconButton>
        </Link>
      <Box>
        <img
          src={imgUrl + movieDetails.poster_path}
          alt={movieDetails.title}
          style={{ maxWidth: "350px", maxHeight: "500px" }}
        />
      </Box>
      <Box sx={{ maxWidth: "100%" }}>
        <Typography variant="h4" sx={{ marginBottom: "10px" }}>
          {movieDetails.title}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "10px" }}>
          {movieDetails.overview}
        </Typography>
        <Typography variant="h5">Информация</Typography>
        <MovieCardDetailsTable
          movieDetails={movieDetails}
          movieCredits={movieCredits}
        />
      </Box>
      
    </Box>
          

          
           
            
    
    )

}
export{CardDetail}