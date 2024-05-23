import { createContext, useState } from "react";

const MoviesPopularContext = createContext([])

// eslint-disable-next-line react/prop-types
function MoviesProvider({children}) {
  const [moviesPopular, setMoviesPopular] = useState()

  return (
      <MoviesPopularContext.Provider value={{moviesPopular, setMoviesPopular}}>
        {children}
      </MoviesPopularContext.Provider>
  )

}

export { MoviesProvider, MoviesPopularContext }