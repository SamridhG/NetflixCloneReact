 interface VideoDetailsProps{
     details:any
}
function VideoDetails({details}:VideoDetailsProps) {
    console.log(details)
  return (
    <div className=" absolute flex flex-col text-white">
    <div className="text-5xl font-bold p-2">
        {details?.original_title}
    </div>
    <div className="text-2xl leading-relaxed max-w-prose p-2">
        {details?.overview}
    </div>
</div>

  )
}

export default VideoDetails
