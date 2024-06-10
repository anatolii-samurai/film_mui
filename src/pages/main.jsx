import Filter from "../components/Filter/Filter";
import FilmList from "../context/FilmList";


// eslint-disable-next-line no-debugger
export default function Main(){
    // eslint-disable-next-line no-debugger
    
        return(
            <>
            <div className="main__filter">
             <Filter/>
          </div>
          <div className="card__field">
             <FilmList/> 
          </div>
            </>
        )
   
    
    
}


