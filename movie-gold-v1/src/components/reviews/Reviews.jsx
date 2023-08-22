import { useLoaderData } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import api from '../../api/axiosConfig'
import ReviewForm from "./reviewForm/ReviewForm"
import { nanoid } from "nanoid"

const getMovie = async (movieId) => {
   const response = await api.get(`/api/v1/movies/${movieId}`)
  return response.data
}

export const loader = async ({params}) => {
   return await getMovie(params.movieId)
}

export default function Reviews() {
   const movie = useLoaderData();

   return(
      <Container>
         <Row>
            <Col>
               <h3> Reviews </h3>
            </Col>
         </Row>
         <Row key={nanoid()}>
            <Col>
               <img src={movie?.poster} alt="movie-poster" />
            </Col>
            <Col>
               {
                  <>
                     <Row>
                        <Col>
                           <ReviewForm />
                        </Col>
                     </Row>
                     <Row>
                        <Col>
                           <hr />
                        </Col>
                     </Row>
                  </>
               }
               {
                  movie.reviewIds.map((review) => {
                     return (
                        <>
                           <Row>
                              <Col>
                                 {review.body}
                              </Col>
                           </Row>
                           <Row>
                              <Col>
                                 <hr />
                              </Col>
                           </Row>
                        </>
                     )
                  })
               }
            </Col>
         </Row>
         <Row>
            <Col>
               <hr />
            </Col>
         </Row>
      </Container>
   )
}