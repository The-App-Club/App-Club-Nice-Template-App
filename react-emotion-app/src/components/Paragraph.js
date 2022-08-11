import styled from '@emotion/styled';

const StyledParagraph = styled.p``;

function Paragraph({ children }) {
  return <StyledParagraph>{children}</StyledParagraph>;
}

export { Paragraph };
