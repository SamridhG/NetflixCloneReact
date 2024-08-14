export const API_BASE_URL:string=import.meta.env.VITE_BASE_URL
export const token:string="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTBhMzQ1MjhhMDU3NjUwZjE4MzU2YWJhMWQ5ODRlYyIsIm5iZiI6MTcyMjk3NjYyNC45OTI5NDgsInN1YiI6IjY2YjI4NTRkODkyODYxYjljMDUxNzBkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IKGg4lYOK9O_iVzevgqovpiP-H_j2JUKVEN6aS-SLYo"
export const API_END_POINTS={
      MOVIE_LIST:'/genre/movie/list',
      TRAILER_MOVIE_LIST:'movie/now_playing',
      VIDEO_KEY:'movie/{movie_id}/videos',
      MOVIE_CATEGORY:'movie'
}

export const HTTPS_METHODS={
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
}