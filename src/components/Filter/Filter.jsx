import { RangeSlider, SelectCategory } from '../Filter/Select';
import { GenreList } from '../Filter/Genre-list';
import { CloseFilter } from '../Buttons/Buttons';
import { PaginationFilms } from '../Filter/pagination';


export default function Filter(){

    return(
        <>
        <div className="filter">
                  <div className="title__filter">
                    Фильтры
                  <CloseFilter/>  
                  </div>
                  <SelectCategory/>
                  <RangeSlider id={'years__filter'} />
                
                  <GenreList/>
                  
                  <div className="pagination">
                    <PaginationFilms />
                  </div>
                </div>
        </>
    )
}


