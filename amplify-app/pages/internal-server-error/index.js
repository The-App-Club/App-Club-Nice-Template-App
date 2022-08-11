function InternalServerError() {
  return <></>;
}

// https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation
// デプロイ時にこけるので、ローカルで見たいならコメントイン、デプロイするときはコメントアウト
// export async function getStaticProps() {
//   const responseInfo = await fetch(`https://httpbin.org/status/500`)
//   const responseData = {}
//   const statusCode = responseInfo.status
//   console.log(responseInfo, responseData, statusCode)
//   switch (statusCode) {
//     case 500:
//       return {
//         redirect: {
//           destination: '/500',
//           permanent: false,
//         },
//       }
//     default:
//       return {
//         props: { responseData }
//       }
//   }
// }

export default InternalServerError;
