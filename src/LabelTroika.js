import React from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useTransition } from '@react-spring/core';

const nunitoSans =
  'https://fonts.gstatic.com/s/nunitosans/v6/pe03MImSLYBIv1o4X1M8cc8-BM5jU1c.woff';

const labels = ['Atomic components', 'Composite components', 'Pages', 'Apps'];

export const Label = () => {
  const text = React.useRef();
  const step = React.useState(0);

  useFrame(({ camera }) => {
    if (text.current) {
      text.current.lookAt(camera.position);
    }
  });

  const transition = useTransition(step, {
    from: {
      position: [0, 0, -20],
      rotation: [0, Math.PI, 0],
      scale: [0, 0, 0],
      opacity: 0,
    },
    enter: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      opacity: 1,
    },
    leave: {
      position: [0, 0, -10],
      rotation: [0, -Math.PI, 0],
      scale: [0, 0, 0],
      opacity: 0,
    },
    config: () => (n) => n === 'opacity' && { friction: 60 },
  });

  return (
    <group>
      {transition((style, step) => (
        // <Text
        //   open={true}
        //   t={style.t}
        //   opacity={style.opacity}
        //   background={props.background}
        //   children={jumbo[location]}
        // />
        <Text
          ref={text}
          font={nunitoSans}
          anchorX="center"
          anchorY="middle"
          fontSize={6}
          lineHeight={1}
          letterSpacing={0}
          textAlign="center"
          color="#000"
          opacity={style.opacity}
        >
          {labels[step]}
        </Text>
      ))}
    </group>
  );
};

// function Text({ text, opacity }) {
//   return (
//     <div
//       style={{
//         transform: opacity.to(
//           (t) => `translate3d(0,${0 * -50 + (1 - t) * ((1 + 0) * 40)}px,0)`
//         ),
//       }}
//     >
//       {text}
//     </div>
//   );
// }
