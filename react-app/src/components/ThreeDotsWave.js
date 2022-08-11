import styled from '@emotion/styled';
import {motion} from 'framer-motion';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '50%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
  end: {
    y: '190%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const StyledThreeDotsWave = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
`;

const StyledCircle = styled(motion.div)`
  width: 0.5rem;
  height: 0.5rem;
  background-color: black;
  border-radius: 0.25rem;
`;

const ThreeDotsWave = () => {
  return (
    <StyledThreeDotsWave
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <StyledCircle variants={loadingCircleVariants} />
      <StyledCircle variants={loadingCircleVariants} />
      <StyledCircle variants={loadingCircleVariants} />
      {/* {[...Array(3)].map((n, index) => {
        return <StyledCircle variants={loadingCircleVariants} />;
      })} */}
    </StyledThreeDotsWave>
  );
};

export {ThreeDotsWave};
