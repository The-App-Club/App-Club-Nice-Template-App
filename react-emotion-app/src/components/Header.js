import styled from '@emotion/styled';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
`;

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export { Header };
