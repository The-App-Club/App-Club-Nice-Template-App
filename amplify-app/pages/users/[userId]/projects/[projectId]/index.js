// https://nextjs.org/docs/api-reference/next/router
import { useRouter } from "next/router";
import Link from "next/link";

// 実行順序３
function Project(targetUserProjectVideoInfo) {
  const router = useRouter();
  const { userId, projectId } = { ...router.query };
  const userProjectDataInfo =
    targetUserProjectVideoInfo.targetUserProjectVideoInfo; // ダサい
  const { _, __, videoIdList } = { ...userProjectDataInfo };
  console.log(
    "Project",
    userId,
    projectId,
    targetUserProjectVideoInfo,
    videoIdList,
    router.query
  );
  return (
    <div>
      <p>userId : {userId}</p>
      <p>projectId : {projectId}</p>
      <div>
        <ul>
          {videoIdList.map((targetDataInfo) => (
            <li key={targetDataInfo.videoId}>
              {/* コメントダヨーン */}
              <Link
                href={`/users/${userId}/projects/${projectId}/videos/${targetDataInfo.videoId}`}
              >
                <a>{targetDataInfo.videoId}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const targetUserProjectVideoInfoList = [
  {
    userId: "faTw3pFzvC15kRVFSAuCkIWmUO1GgVuF",
    projectId: "FuVgG1OUmW",
    videoIdList: [
      { videoId: "IxHKYBs5" },
      { videoId: "mLUnTrHQ" },
      { videoId: "tznALj3v" },
    ],
  },
  {
    userId: "faTw3pFzvC15kRVFSAuCkIWmUO1GgVuF",
    projectId: "IkCuASFVRk51CvzFp3wTaf",
    videoIdList: [
      { videoId: "Doy70JGU" },
      { videoId: "Um20vuhN" },
      { videoId: "cf8JqWVJ" },
    ],
  },
];

// 実行順序１（あれば）
export const getStaticPaths = async () => {
  // 事前ビルドしたいパスを指定
  const paths = targetUserProjectVideoInfoList.map(
    (targetUserProjectVideoInfo) => ({
      params: {
        userId: targetUserProjectVideoInfo.userId,
        projectId: targetUserProjectVideoInfo.projectId,
      },
    })
  );
  // paths：事前ビルドするパス対象を指定するパラメータ
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false };
};

// paramsには上記pathsで指定した値が入る
// 実行順序２（あれば）
export const getStaticProps = async ({ params }) => {
  console.log("getStaticProps", params);
  const targetUserProjectVideoInfo = targetUserProjectVideoInfoList.filter(
    (targetUserProjectVideoInfo) => {
      return (
        targetUserProjectVideoInfo.userId === params.userId &&
        targetUserProjectVideoInfo.projectId === params.projectId
      );
    }
  )[0];
  return { props: { targetUserProjectVideoInfo } };
};

export default Project;
