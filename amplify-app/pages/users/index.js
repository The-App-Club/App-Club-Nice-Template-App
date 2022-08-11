import Link from "next/link";

function Home({ targetUserInfoList }) {
  return (
    <div>
      <h1>User Info List</h1>
      <ul>
        {targetUserInfoList.map((targetUserInfo) => (
          <li key={targetUserInfo.userId}>
            {/* コメントダヨーン */}
            <Link href={`/users/${targetUserInfo.userId}`}>
              <a>{targetUserInfo.userId}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const targetUserInfoList = [
    {
      userId: "faTw3pFzvC15kRVFSAuCkIWmUO1GgVuF",
    },
    {
      userId: "Fs0WOx7MQlaIwmUcdiNQozn7lorg8jfN",
    },
    {
      userId: "HV1AmCOxxwAEwDiMmekpuNk7Eqd1m6Cf",
    },
  ];

  return {
    props: {
      targetUserInfoList,
    },
  };
}

export default Home;
