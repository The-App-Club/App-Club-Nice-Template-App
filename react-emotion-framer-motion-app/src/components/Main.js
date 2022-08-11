import styled from '@emotion/styled';

const StyledMain = styled.main`
  margin: 0 auto;
  height: 100%;
  @media screen and (min-width: 769px) {
    width: 30vw;
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;

const StyledArticle = styled.article`
  @media screen and (min-width: 769px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

function Main({ children }) {
  return (
    <StyledMain>
      <StyledArticle>{children}</StyledArticle>
    </StyledMain>
  );
}

export { Main };
