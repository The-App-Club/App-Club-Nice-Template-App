import './index.scss';
import {createRoot} from 'react-dom/client';

import styled from '@emotion/styled';

import {BouncingBall} from './components/BouncingBall';
import {Box} from './components/Box';
import {CircleLoader} from './components/CircleLoader';
import {Grid} from './components/Grid';
import {Loading} from './components/Loading';
import {ThreeDotsWave} from './components/ThreeDotsWave';

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

// eslint-disable-next-line
const App = ({context}) => {
  return (
    <StyledContainer>
      <Grid>
        <Box>
          <Loading />
          <BouncingBall />
          <ThreeDotsWave />
          <CircleLoader />
        </Box>
      </Grid>
    </StyledContainer>
  );
};

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<App />);
