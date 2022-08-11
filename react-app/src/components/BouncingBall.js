import styled from '@emotion/styled';
import {motion} from 'framer-motion';

const ballVariants = {
  animate: {
    y: ['100%', '-100%'],
    backgroundColor: ['#064635', '#519259', '#F0BB62', '#F2789F'],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: 'easeOut',
    },
  },
};

const StyledBouncingBall = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`;

const StyledBall = styled(motion.div)`
  width: 1rem;
  height: 1rem;
  background-color: black;
  border-radius: 0.5rem;
`;

const BouncingBall = () => {
  return (
    <StyledBouncingBall>
      <StyledBall variants={ballVariants} animate={'animate'}></StyledBall>
    </StyledBouncingBall>
  );
};

export {BouncingBall};
