import React from 'react';

import styled from '@emotion/styled';

const StyledBox = styled.div`
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  outline: 1px solid rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.01);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = ({children}) => {
  return React.Children.map(children, (child) => {
    return <StyledBox>{child}</StyledBox>;
  });
};
export {Box};
