import { createContext,useReducer } from "react";



export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);
export const SORT_OPINIONS = {
  POPULARITY: 'byPopularity',
  RATING: 'byRating'
}
// eslint-disable-next-line react/prop-types
export function FilterProvider({children}){
  
    const initialState = {
        selectByCategory:SORT_OPINIONS.POPULARITY,
        selectByYear:[2002,2010],
        genres:[],
        currentPage:1,
       }
    const[tasks,dispatch] = useReducer(checkReducer,initialState);
    
    
 
    // useEffect(()=>{
    //   getGenres()
    //   },[])

      
       return(
        <TasksContext.Provider value={tasks}>
                <TasksDispatchContext.Provider value={dispatch}>
                    {children}
                </TasksDispatchContext.Provider>
        </TasksContext.Provider>
       
       )




    function checkReducer(states,action){ 
      switch(action.type){
        case 'set_active_genres': {
          console.log(action.payload);
          return {
            ...states, genres: action.payload
          }
        }
        case "set_sort_popularity":{
          return{
            ...states,selectByCategory: action.payload
          }
        }
        case 'set_active_years': {
          return {
            ...states, selectByYear: action.payload
          }
        }
        case 'set_page': {
          return {
            ...states, currentPage: action.payload
          }
        }
        case 'reset' : 
         { return {...states,
          selectByCategory:SORT_OPINIONS.POPULARITY,
          selectByYear:[2002,2010],
          genres:[],
          currentPage:1,}}
        case 'change' :
          {console.log(states.genres);return {...states,genres: states.genres.map(t => {
            if (t.name === action.payload.name) {
              return {...t, checked:action.payload.checked};
            }else {
              return t;
            }
          })}   
           }
           case "change_genres":
            {
            console.log(states.genres);
            return {...states,genres:[...action.genres]}

          }
            default:
              return states
        }
      } 
}