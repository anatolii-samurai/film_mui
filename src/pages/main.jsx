import Filter from "../components/Filter/Filter";
import FilmList from "../context/FilmList";

export default function Main(){
    
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


