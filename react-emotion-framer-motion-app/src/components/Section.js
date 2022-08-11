import styled from '@emotion/styled';

const StyledSection = styled.section`
  height: 100%;
  margin-bottom: 50vh;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export { Section };
