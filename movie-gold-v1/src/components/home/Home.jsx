import Hero from "./hero/Hero"
import api from '../../api/axiosConfig'
import { useLoaderData } from "react-router-dom"

const getMovies = async () => {
   try {
     const response = await api.get('/api/v1/movies')
     return response.data
   }
   catch(err) {
     console.log(err)
   }
 }

export const loader = async () => {
   return await getMovies()
}

const Home = () => {

   const movies = useLoaderData()
  return (
    <Hero movies={movies} />
  )

}

export default Home