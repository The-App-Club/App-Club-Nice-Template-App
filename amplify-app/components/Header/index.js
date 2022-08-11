import styled from "styled-components";
// https://styled-components.com/docs/basics

// DOMに対してCssのスタイルを適用している
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// DOMに対してCssのスタイルを適用している
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// 呼び出し側で渡した引数をprops経由で受け取ることができ、引数に応じてこのコンポーネント内で処理ができる
// 処理後、Cssを適用したDOMを組み立てコンポーネント化してreturnしている
function Header(props) {
  console.log(
    "Header props",
    props,
    props.children,
    props.className,
    props.className.split(/ /)
  );
  return (
    <Wrapper>
      <Title>
        <div>Hello World!</div>
        {props.children}
      </Title>
    </Wrapper>
  );
}

export default Header;
