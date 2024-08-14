import useMovieTrailer from "../../../Hooks/useMovieTrailer";
import VideoDetails from "./VideoDetails";

function VideoFrame() {
    const { trailerKey,movieDetails } = useMovieTrailer();
    
    return (
        <div className="relative w-screen">
        <iframe 
            className="w-screen aspect-video pointer-events-none"
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&loop=1&mute=1&controls=0&start=0&playlist=${trailerKey}`}
            title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
        ></iframe>
        
        <div className="absolute bottom-1/2 left-10 px-10 text-white z-10 w-full">
            <VideoDetails details={movieDetails} />
        </div>
    </div>
    
    );
}

export default VideoFrame;
