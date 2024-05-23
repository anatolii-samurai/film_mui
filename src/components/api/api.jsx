

export const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2ZlYmQ0NjI5ZDdiNTk0YTJiMmI3ZTZhOWY0YWMxMiIsInN1YiI6IjY0ZDNkYjY3MDIxY2VlMDExYzhmMWUzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xjPCqTHf4tpkdc9e_Le9wFQLCGTXHZUbr5aafP3sTtA'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`
  }
};


async function getMovieById(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`
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
    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`
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
export { getGenresMovies,getMovies, getMoviePathUrl,getMovieById,getDetailsMovie,loader }
   
      