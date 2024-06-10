
import { MoviesProvider } from '../context/movies-context';
import {FilmCard} from '../pages/Card';



export default function FilmList(){
    return(
        <>
         <MoviesProvider>
            <FilmCard/>
        </MoviesProvider>
        </>
       
 
    )
            
    
}