import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home, {loader as homeLoader} from "../components/home/Home";
import {action as reviewAction} from "../components/reviews/reviewForm/ReviewForm"
import Trailer from "../components/trailer/Trailer";
import Reviews, {loader as reviewLoader } from "../components/reviews/Reviews";
import NotFound from "../components/notfound/NotFound";

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         {
            index: true,
            element: <Home />,
            loader: homeLoader
         },
         {
            path: 'trailer/:ytTrailerId',
            element: <Trailer />
         },
         {
            path: 'reviews/:movieId',
            element: <Reviews />,
            loader: reviewLoader,
            action: reviewAction
         },
         {
            path: '*',
            element: <NotFound />
         }
      ]
   }
])

export default router;