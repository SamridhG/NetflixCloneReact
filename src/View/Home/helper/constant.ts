export interface LIST_PORTO{
    name:string,
    path:string,
} 
export const CATEGORY_LIST:Array<LIST_PORTO>=[
    {
      name:"Must Watch",
      path:"now_playing",  
    },
    {
        name:"Popular",
        path:"popular",  
    },
    {
        name:"Top Rated",
        path:"top_rated",  
    },
    {
        name:"UpComing",
        path:"upcoming",  
    },
]

export const POSTER_LINK="https://image.tmdb.org/t/p/w780"