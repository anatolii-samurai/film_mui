import { FilterProvider } from '../context/Context';
import { Outlet } from 'react-router-dom';
import Header from '../header';
import {AuthProvider} from '../context/Auth';




 
export default function App(){
  return(
    <div className="container">   
        <Header/> 
        <AuthProvider>
        
          <FilterProvider>
           
          {/* <Main/> */}
          <Outlet/> 
        </FilterProvider>
        </AuthProvider>
          
      
        
     
      
    </div>
  )
}