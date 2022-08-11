// https://nextjs.org/docs/api-reference/next/router
import { useRouter } from "next/router";
import Link from "next/link";
import { Amplify, API, withSSRContext } from "aws-amplify";
import awsExports from "../../../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

// 実行順序３
function User(targetUserProjectInfo) {
  const router = useRouter();
  const { userId } = { ...router.query };
  const userProjectInfo = targetUserProjectInfo.targetUserProjectInfo; // ダサい
  const { _, projectIdList } = { ...userProjectInfo };
  const greetingTextData = targetUserProjectInfo.greetingTextData;
  console.log(
    "User",
    userId,
    targetUserProjectInfo,
    greetingTextData,
    projectIdList
  );
  return (
    <div>
      <p>userId : {userId}</p>
      <p>greetingTextData : {greetingTextData}</p>
      <p>Project Id List</p>
      <div>
        <ul>
          {projectIdList.map((targetProjectInfo) => (
            <li key={targetProjectInfo.projectId}>
              {/* コメントダヨーン */}
              <Link
                href={`/users/${userId}/projects/${targetProjectInfo.projectId}`}
              >
                <a>{targetProjectInfo.projectId}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const targetUserInfoList = [
  {
    userId: "faTw3pFzvC15kRVFSAuCkIWmUO1GgVuF",
    projectIdList: [
      { projectId: "FuVgG1OUmW" },
      { projectId: "IkCuASFVRk51CvzFp3wTaf" },
      { projectId: "51CvzFp3wTaf" },
    ],
  },
  {
    userId: "Fs0WOx7MQlaIwmUcdiNQozn7lorg8jfN",
    projectIdList: [
      { projectId: "Nfj8grol7" },
      { projectId: "nzoQNidcUmwIa" },
      { projectId: "lQM7xOW0sF" },
    ],
  },
  {
    userId: "HV1AmCOxxwAEwDiMmekpuNk7Eqd1m6Cf",
    projectIdList: [
      { projectId: "fC6m1dqE7" },
      { projectId: "kNupkemMiDw" },
      { projectId: "EAwxxOCmA1VH" },
    ],
  },
];

// 実行順序１（あれば）
export const getStaticPaths = async () => {
  // 事前ビルドしたいパスを指定
  const paths = targetUserInfoList.map((targetUserInfo) => ({
    params: {
      userId: targetUserInfo.userId,
    },
  }));
  // paths：事前ビルドするパス対象を指定するパラメータ
  // fallback：事前ビルドしたパス以外にアクセスしたときのパラメータ true:カスタム404Pageを表示 false:404pageを表示
  return { paths, fallback: false };
};

// paramsには上記pathsで指定した値が入る
// 実行順序２（あれば）
export const getStaticProps = async ({ params }) => {
  console.log("getStaticProps", params);

  const SSR = withSSRContext();
  const targetGreetingTextData = await SSR.API.get(
    "AmplifyVideoEditAppRestPythonApi",
    "/hello"
  );
  console.log("targetGreetingTextData", targetGreetingTextData);

  const targetUserProjectInfo = targetUserInfoList.filter((targetUserInfo) => {
    return targetUserInfo.userId === params.userId;
  })[0];
  return {
    props: Object.assign(
      { targetUserProjectInfo },
      { greetingTextData: targetGreetingTextData }
    ),
  };
};

export default User;
