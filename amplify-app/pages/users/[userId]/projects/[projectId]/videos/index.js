import { useRouter } from "next/router";

function VideoIndex() {
  const router = useRouter();
  console.log("VideoIndex", router);
  return <></>;
}

export default VideoIndex;
