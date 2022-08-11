// https://nextjs.org/docs/advanced-features/custom-error-page
// https://error404.fun/
// https://craftwork.design/
// https://craftwork.design/license/
// 実際リリースするときはライセンス買う必要があるので、それまでは一旦これで 今はPersonalライセンス
function Custom500() {
  console.log("Custom500")
  return (
    <div>
      <h1>500 - Server-side error occurred</h1>
      <img src="../image/23.png" width="100%" height="auto" alt="500"></img>
    </div>
  )
}

export default Custom500