import styled from '@emotion/styled';

const StyledGrid = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: repeat(5, 8rem);
  grid-auto-rows: 8rem;
`;

const Grid = ({children}) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export {Grid};
