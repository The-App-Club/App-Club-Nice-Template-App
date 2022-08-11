import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;

function Footer() {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()} App Club. All Rights Reserved.
    </StyledFooter>
  );
}

export { Footer };
