import styled from '@emotion/styled';

// https://css-tricks.com/almanac/properties/b/backdrop-filter/
const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

function Header({ children }) {
  return <StyledHeader>{children}</StyledHeader>;
}

export { Header };
