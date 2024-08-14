import ListComponent from "./component/ListComponent";
import VideoFrame from "./component/VideoFrame";

function Home() {
  return (
    <div className="relative w-full">
      <div className="relative z-10">
        <VideoFrame />
      </div>
      <div className="absolute top-[calc(70%)] left-0 w-full z-20">
        <ListComponent />
      </div>
    </div>
  );
}



export default Home;
