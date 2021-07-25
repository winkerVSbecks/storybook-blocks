import React from 'react';
import styled from 'styled-components';
import { useTransition, animated } from '@react-spring/web';

const Container = styled.div`
  pointer-events: none;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 144px;
`;

const Box = styled(animated.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: opacity, transform;
`;

const Text = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 900;
  font-size: 32px;
  overflow: hidden;
  color: #000;
  white-space: pre;
  text-align: center;

  @media (min-width: 40em) {
    font-size: 40px;
  }

  @media (min-width: 52em) {
    font-size: 48px;
  }
`;

const labels = ['Atomic components', 'Composite components', 'Pages', 'Apps'];

export const Label = ({ step }) => {
  const transition = useTransition(step, {
    from: { opacity: 0, transform: 'translate3d(0, -48px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 24px, 0)' },
  });

  return (
    <Container>
      {transition((style, step) => (
        <Box style={style}>
          <Text>{labels[step]}</Text>
        </Box>
      ))}
    </Container>
  );
};
