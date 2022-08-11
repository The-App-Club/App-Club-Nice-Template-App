import Header from "../../components/Header";
import MyHeading from "../../components/MyHeading";
import MyLink from "../../components/MyLink";

const inlineStyles = {
  fontFamily: `'Times New Roman', Times, serif`,
  textAlign: "center",
};

function Edit() {
  return (
    <div>
      {/* インラインスタイルも適用できる */}
      <h1 style={inlineStyles}>Edit</h1>
      <Header className="videoEditHeader videoEditSubHeader">
        {/* テキストノードとDOMを入れ子にして引数に渡せる */}
        Video Edit App
        <p>video edit app description</p>
      </Header>
      <MyHeading messageType="primary">あいうえお</MyHeading>
      <MyHeading messageType="info">あいうえお</MyHeading>
      <MyHeading messageType="error">あいうえお</MyHeading>
      <MyLink
        href="https://timemachine.betamode.dev/"
        name="https://timemachine.betamode.dev/"
      ></MyLink>
    </div>
  );
}

export default Edit;
