import { FilterProvider } from '../context/Context';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import {AuthProvider} from '../context/Auth';
import Main from '../pages/main';
import { MoviesProvider } from '../context/movies-context';



 
export default function App(){
 
  return(
    <div className="container">   
        
        <AuthProvider>
        <Header/> 
        <FilterProvider> 
          <MoviesProvider>
               {/* <Main/>  */}
          <Outlet/> 
          </MoviesProvider>
          
        </FilterProvider>
        </AuthProvider>
          
        
    </div>
  )
 
 
    
  
  
}