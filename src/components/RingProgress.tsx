//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Svg, {Circle, Rect} from "react-native-svg";
import Animated, {useAnimatedProps} from "react-native-reanimated";

type RingProgressProps = {
  radius?: number;
  strokeWidth?: number;
  progress?: number;
}

const color = "#EE0F55"

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const RingProgress = ({radius = 100, strokeWidth = 35, progress}: RingProgressProps) => {
  const innerRadius = radius - strokeWidth / 2;
  const circumference = innerRadius * 2 * Math.PI;

  const animatedProps = useAnimatedProps(() => ({
    strokeDasharray: [circumference * progress, circumference]
  }))

  return (
    <View style={{width: radius * 2, height: radius * 2, alignSelf: 'center'}}>
      <Svg>
        <Circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          opacity={0.2}
        />
        <AnimatedCircle
          animatedProps={animatedProps}
          cx={radius}
          cy={radius}
          r={innerRadius}
          originX={radius}
          originY={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={'round'}
          rotation={-90}
        />
      </Svg>
    </View>
  );
};

export default RingProgress;
