// https://nextjs.org/docs/api-reference/next/router
import { useRouter } from "next/router";

// 実行順序３
function Video() {
  const router = useRouter();
  const { userId, projectId, videoId } = { ...router.query };
  console.log("Video", userId, projectId, videoId, router.query);
  return (
    <div>
      <p>userId : {userId}</p>
      <p>projectId : {projectId}</p>
      <p>videoId : {videoId}</p>
    </div>
  );
}

export default Video;
