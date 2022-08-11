import styled from "styled-components";

// デフォルトスタイル設定
const DefaultButton = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// 差分スタイル更新
const TomatoButton = styled(DefaultButton)`
  color: tomato;
  border-color: tomato;
`;

// https://styled-components.com/docs/basics#adapting-based-on-props
function Button(props) {
  console.log("Button", props);
  return (
    <div>
      <DefaultButton>Normal Button</DefaultButton>
      <TomatoButton>Tomato Button</TomatoButton>
    </div>
  );
}

export default Button;
