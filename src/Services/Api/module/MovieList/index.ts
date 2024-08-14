import api from "../../api";
import { API_END_POINTS } from "../../constant";

export const movie=api.injectEndpoints({
    endpoints:(builder)=>({
        movieList:builder.query({
            query:()=>({
                url:API_END_POINTS.MOVIE_LIST
            })
        }),
        trailerMovieList:builder.query({
            query:()=>({
                url:API_END_POINTS.TRAILER_MOVIE_LIST
            })
        }),
        trailerYoutubeKey:builder.query({
            query:(movieId)=>({
               url:`${API_END_POINTS.VIDEO_KEY.replace('{movie_id}', movieId)}`
            })
        }),
        categoryList:builder.query({
            query:(categoryId)=>({
               url:`${API_END_POINTS.MOVIE_CATEGORY}/${categoryId}`
            })
        })
    })
})
export const {useMovieListQuery,useTrailerMovieListQuery,useTrailerYoutubeKeyQuery,useCategoryListQuery}=movie 