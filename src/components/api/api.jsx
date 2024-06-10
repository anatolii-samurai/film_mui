


export const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJlZDMzMGRmY2FkMmQ3Zjk4NDY4MTBmNDBiZGFkYSIsInN1YiI6IjY1Y2RlZjVhZDdkY2QyMDE3YzFlZGQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKdDDbycHzyarq7TlYOkqna6C4TjGmJgQZiovGNkfd8'

export const COOKIE_KEYS = {
    EMAIL:'email',
    ACCOUNT_ID:"user_id"
}


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};


async function getMovieById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=ru-RU`
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.ok) {
      return result
    }
    throw new Error(`${result.status_message}`)
  } catch (e) {
    console.error(e)
  }
}
  async function getDetailsMovie(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ru-RU`
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      if (response.ok) {
        return result
      }
      throw new Error(`${result.status_message}`)
    } catch (e) {
      console.error(e)
    }
}

async function getGenresMovies() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=ru'
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.ok) {
      return result
    }
    throw new Error(`${result.status_message}`)
  } catch (e) {
    console.error(e)
  }

}



async function getMovies(url) {
  
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.ok) {
      return result
    }
    throw new Error(`${result.status_message}`)
  } catch (e) {
    console.error(e)
  }

}
async function getMoviePathUrl() {
  const url = 'https://api.themoviedb.org/3/configuration'
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    if (response.ok) {
      return result
    }
    throw new Error(`${result.status_message}`)
  } catch (e) {
    console.error(e)
  }

}
async function loader({params}) {
  const movieDetails = await getMovieById(params.movieId)
  const movieCredits = await getDetailsMovie(params.movieId)
  const moviePath = await getMoviePathUrl()
  return {movieDetails, movieCredits, moviePath}
}


 const userIdUrl = 'https://api.themoviedb.org/3/account/account_id'; 
      
 
 async function getUserId() {
        try {
          const response = await fetch(userIdUrl, options);
          const json = await response.json()
          
          return json
        
         } catch {
          throw new Error('Ошибка при извлечении данных о пользователе');
         }
      } 

      async function controlFavouriteMovies(movieId,isFavourite,accountId) {
        const url = `https://api.themoviedb.org/3/account/${accountId}/favorite`
        const options = {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body:JSON.stringify({ media_type: "movie", media_id: movieId, favorite: isFavourite })
        }
        try {
          const response = await fetch(url, options)
          const result = await response.json()
          // if (response.ok) {
          //   return result
          // }
          throw new Error(`${result.status_message}`)
        } catch (e) {
          console.error(e)
        }
      
      }
      // controlFavouriteMovies(929590,true,21010212)
      async function getMoviesByName(name) {
        const url = `https://api.themoviedb.org/3/search/movie?query=${name}&language=ru-RU`
        try {
          const response = await fetch(url, options)
          const result = await response.json()
          if (response.ok) {
            return result
          }
          throw new Error(`${result.status_message}`)
        } catch (e) {
          console.error(e)
        }
      
      }  








export {getMoviesByName,controlFavouriteMovies, getUserId, getGenresMovies,getMovies, getMoviePathUrl,getMovieById,getDetailsMovie,loader}
   
      