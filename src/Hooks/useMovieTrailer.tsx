import { useEffect, useState } from "react"
import { useTrailerMovieListQuery, useTrailerYoutubeKeyQuery } from "../Services/Api/module/MovieList"

function useMovieTrailer() {
    const [movieId,setMovieId]=useState<string|undefined>();
    const [trailerKey,setTrailerKey]=useState()
    const [movieDetails,setMovieDetails]=useState()
    const {data:movieList}=useTrailerMovieListQuery({})
    const {data:movieTrailerList,refetch}=useTrailerYoutubeKeyQuery(movieId,{
        skip:!movieId,
        refetchOnMountOrArgChange:0
    })
    useEffect(()=>{
           if(movieList){
            const totalItem=movieList?.results?.length;
            const index=Math.ceil(Math.random()*totalItem)
            const movie=movieList?.results[index]
            setMovieDetails(movie)
            setMovieId(movie.id);
           }
    },[movieList])
    useEffect(() => {
        if (movieId) {
            refetch(); // Only refetch if movieId is available
        }
    }, [movieId, refetch]);
    useEffect(()=>{
        if(movieTrailerList){
            const clip=movieTrailerList?.results?.filter((item:any)=>
                item?.site==='YouTube' && item?.type==='Trailer'
            )
            
            setTrailerKey(clip[0]?.key)
        }
    })
  return {
    trailerKey,
    movieDetails
  }
}

export default useMovieTrailer
