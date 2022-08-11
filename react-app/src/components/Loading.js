import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BounceAnimation = keyframes`
0% { 
  margin-bottom: 0; 
}

50% { 
  margin-bottom: 1rem;
}

100% { 
  margin-bottom: 0;
}
`;
const Dot = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 0.75rem;
  height: 0.75rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <h3>Loading</h3>
      <Dot delay="0s" />
      <Dot delay="0.1s" />
      <Dot delay="0.2s" />
    </LoadingWrapper>
  );
};

export {Loading};
