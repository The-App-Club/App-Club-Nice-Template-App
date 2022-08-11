import styled from '@emotion/styled';
import {motion} from 'framer-motion';

const StyledCircleLoader = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCircle = styled(motion.div)`
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #e9e9e9;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
`;

// https://www.framer.com/docs/transition/
const spinVariants = {
  animate: {
    rotate: 360,
    transition: {
      loop: Infinity,
      ease: 'linear',
      duration: 1,
    },
  },
};

const CircleLoader = () => {
  return (
    <StyledCircleLoader>
      <StyledCircle variants={spinVariants} animate={'animate'}></StyledCircle>
    </StyledCircleLoader>
  );
};

export {CircleLoader};
