import { useEffect, useState } from 'react'
import './App.css'
import MoviePlay from './MoviePlay'
const API_KEY = 'api_key=2df8c8f9c2fc663f820e2f5373bfdbab'
const Movie_Url = 'https://api.themoviedb.org/3/discover/movie?'
const Api_Url = Movie_Url + API_KEY
const Search_url =
  'https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=2df8c8f9c2fc663f820e2f5373bfdbab'

function App() {
  const [movies, setMovieList] = useState([])
  const [query, setQuery] = useState('')
  const getMovie = () => {
    fetch(Api_Url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setMovieList(data.results)
      })
  }

  useEffect(() => {
    getMovie()
  }, [])

  const searchMovie = async (e) => {
    e.preventDefault('sereahing')
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=2df8c8f9c2fc663f820e2f5373bfdbab=${query}`
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setMovieList(data.result)
    } catch (e) {}
  }
  const changeHanderler = (e) => {
    setQuery(e.target.value)
  }
  return (
    <>
      <header id='head' class='head'>
        <form className='form'>
          <input
            type='text'
            id='search'
            className='seacher'
            placeholder='search'
            value={query}
            onChange={changeHanderler}
            name='query'
          />
          <button>submit</button>
        </form>
      </header>

      <div className='main'>
        <div className='grid'>
          {movies.map((movieReq) => (
            <MoviePlay key={movieReq.id} {...movieReq} />
          ))}
        </div>
      </div>
    </>
  )
}
export default App
